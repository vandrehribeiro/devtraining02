import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class LocalUsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '$2b$12$Y7sA9sL2zMrDZpZlrkQLa.zedH75SLVZXn3J1xb1UlOvlN.ln2fXy',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}