import { Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('users')
  createUser(@Query() name: string) {
    return this.appService.createUser(name);
  }

  @Delete('users')
  deleteUser(@Query() name: string) {
    return this.appService.deleteUser(name)
  }
}