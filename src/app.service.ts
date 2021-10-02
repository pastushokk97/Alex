import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users: string[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): string[] {
    return this.users;
  }

  createUser(name: string): string[] {
    this.users.push(name);
    return this.users;
  }
  
  deleteUser(name: string) {
    const index =  this.users.indexOf(name);
    return this.users.splice(index, 1);
  }
}
