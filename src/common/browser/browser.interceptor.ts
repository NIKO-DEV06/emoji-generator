import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BrowserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const userAgent = request.headers['user-agent'];
    const browserClient = userAgent
      ? userAgent.split(' ')[0] + ' Browser'
      : 'Unknown User Agent';
    request.headers.browser = browserClient;
    console.log(`Interceptor manipulated request: ${request.headers.browser}`);
    return next.handle();
  }
}
