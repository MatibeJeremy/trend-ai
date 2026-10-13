import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Request parameters: ${req.method} ${req.originalUrl} 
      - Request Body: ${JSON.stringify(req.body)}`,
    );
    next();
  }
}
