import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as md5 from 'md5';
import { ThrottlerModuleOptions } from './throttler-module-options.interface';
import { ThrottlerStorage } from './throttler-storage.interface';
import {
  THROTTLER_LIMIT,
  THROTTLER_SKIP,
  THROTTLER_TTL,
} from './throttler.constants';
import {
  InjectThrottlerOptions,
  InjectThrottlerStorage,
} from './throttler.decorator';
import { ThrottlerException, throttlerMessage } from './throttler.exception';
@Injectable()
export class ThrottlerGuard implements CanActivate {
  protected headerPrefix = 'X-RateLimit';
  protected errorMessage = throttlerMessage;
  constructor(
    @InjectThrottlerOptions()
    protected readonly options: ThrottlerModuleOptions,
    @InjectThrottlerStorage()
    protected readonly storageService: ThrottlerStorage,
    protected readonly reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const handler = context.getHandler();
    const classRef = context.getClass();

    // return if route skipped
    if (
      this.reflector.getAllAndOverride<boolean>(THROTTLER_SKIP, [
        handler,
        classRef,
      ]) ||
      this.options.skipIf?.(context)
    ) {
      return true;
    }

    //return if no limit || no data (ttl)
    const routeOrClassLimit = this.reflector.getAllAndOverride<number>(
      THROTTLER_LIMIT,
      [handler, classRef],
    );
    const routeOrClassTtl = this.reflector.getAllAndOverride<number>(
      THROTTLER_TTL,
      [handler, classRef],
    );
    const limit = routeOrClassLimit || this.options.limit;
    const ttl = routeOrClassTtl || this.options.ttl;
    //@ts-ignore
    return this.handleRequest(context, limit, ttl);
  }
  protected async handleRequest(
    context: ExecutionContext,
    limit: number,
    ttl: number,
  ): Promise<boolean> {
    const { req, res } = this.getRequestResponse(context);

    //return if useragent ignored
    if (Array.isArray(this.options.ignoreUserAgents)) {
      for (const pattern of this.options.ignoreUserAgents) {
        if (pattern.test(req.headers['user-agent'])) {
          return true;
        }
      }
    }
    const tracker = this.getTracker(req);
    const key = this.generateKey(context, tracker);
    const ttls = await this.storageService.getRecord(key);
    const nearestExpiryTime =
      ttls.length > 0 ? Math.ceil((ttls[0] - Date.now()) / 1000) : 0;

    if (ttls.length >= limit) {
      res.header('Retry-After', nearestExpiryTime);
      this.throwThrottlingException(context);
    }

    res.header(`${this.headerPrefix}-Limit`, limit);
    res.header(
      `${this.headerPrefix}-Remaining`,
      Math.max(0, limit - (ttls.length + 1)),
    );
    res.header(`${this.headerPrefix}-Reset`, nearestExpiryTime);

    await this.storageService.addRecord(key, ttl);
    return true;
  }

  protected getTracker(req: Record<string, any>): string {
    return req.ip;
  }

  protected getRequestResponse(context: ExecutionContext): {
    req: Record<string, any>;
    res: Record<string, any>;
  } {
    const http = context.switchToHttp();
    return { req: http.getRequest(), res: http.getResponse() };
  }
  protected generateKey(context: ExecutionContext, suffix: string): string {
    const prefix = `${context.getClass().name}-${context.getHandler().name}`;
    return md5(`${prefix}-${suffix}`);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected throwThrottlingException(context: ExecutionContext): void {
    throw new ThrottlerException(this.errorMessage);
  }
}
