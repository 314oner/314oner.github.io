//@ts-nocheck
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Response, Request } from 'express';

import { Logger } from '../libs/log4js/log4j.util';

let requestSeq = 0;
const check_list = ['/api/', '/nodeApi/'];

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<any> | Promise<Observable<any>> {
    const start = Date.now();
    const host = context.switchToHttp();
    const req = host.getRequest<Request>();
    const res = host.getResponse<Response>();
    const seq = requestSeq++;
    const url = req.url;
    return next.handle().pipe(
      map((data) => {
        res.header('Content-Type', 'application/json; charset=utf-8');
        /* statusCode:201,200 */
        if (res.statusCode === HttpStatus.CREATED && req.method === 'POST') {
          res.statusCode = HttpStatus.OK;
        }
        const logFormat = `-----------------------------------------------------------------------
        Request original url: ${req.originalUrl}
        Method: ${req.method}
        IP: ${req.ip}
        User: ${JSON.stringify(req.user)}
        Response data: ${JSON.stringify(data.data)}
        -----------------------------------------------------------------------`;
        Logger.info(logFormat);
        Logger.access(logFormat);
        return data;
        // return {
        //   code: 200,
        //   status: 'OK',
        //   data
        // }
      })
    );
  }
}
