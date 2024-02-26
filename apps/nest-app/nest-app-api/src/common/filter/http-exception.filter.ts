import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { Logger } from '../libs/log4js/log4j.util';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionResponse: any = exception.getResponse();
    let validMessage = '';

    const logFormat = `-----------------------------------------------------------------------
      Request original url: ${request.originalUrl}
      Method: ${request.method}
      IP: ${request.ip}
      Status code: ${status}
      Response: ${exception}
      -----------------------------------------------------------------------
      `;
    Logger.error(logFormat);

    if (typeof exceptionResponse === 'object') {
      validMessage =
        typeof exceptionResponse.message === 'string'
          ? exceptionResponse.message
          : exceptionResponse.message[0];
    }
    const message = exception.message
      ? exception.message
      : `${status >= 500 ? 'Service Error' : 'Client Error'}`;
    const errorResponse = {
      data: {},
      message: validMessage || message,
      code: (exception as any)?.errorCode === 11001 ? 401 : -1,
    };
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
