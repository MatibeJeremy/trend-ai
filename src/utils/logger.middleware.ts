import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, next: NextFunction) {
    console.log(
      `Request parameters: ${req.method} ${req.originalUrl} 
      - Request Body: ${JSON.stringify(req.body)}`,
    );
    next();
  }
}
