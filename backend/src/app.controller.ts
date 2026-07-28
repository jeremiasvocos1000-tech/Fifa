import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('pornhub')
  getHello(): string {
    return 'Hello juan!';
  }
}