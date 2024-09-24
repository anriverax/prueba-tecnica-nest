import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.get('X-API-Key');
    const serverApiKey = this.configService.get<string>('serverApiKey');

    if (!apiKey || apiKey !== serverApiKey) {
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }
}
