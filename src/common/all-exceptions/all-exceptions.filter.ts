import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode =
      exception instanceof HttpException ? exception.getStatus() : 500;

    response.status(statusCode).json({
      message:
        exception instanceof HttpException
          ? exception.message
          : 'Internal server error',
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
