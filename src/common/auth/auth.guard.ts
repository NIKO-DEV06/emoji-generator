import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerService } from 'src/logger.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly logger: LoggerService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.info('AuthGuard: Checking API key');
    const request = context.switchToHttp().getRequest();
    const apiKey = request.header('x-api-key');
    return apiKey === 'EDIDI';
  }
}
