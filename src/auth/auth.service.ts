import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../modules/users/users.service';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findName(username);
    if (user) {
      const match = await bcrypt.compare(pass, user.password);
      if(!match) {
        return null
      }
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}


// Course {
//   id: '24e4cc33-9f8e-4913-8f8f-9e5ede796ca6',
//   name: 'Fundamentos',
//   description: 'fundamentos',
//   created_at: 2022-11-01T19:16:06.349Z,
//   tags: [
//     Tag {
//       id: '2c07d212-cb7e-4fa5-a1a2-5666ac0f4ec6',
//       name: 'node.js 3',
//       created_at: 2022-11-01T03:36:37.501Z
//     },
//     Tag {
//       id: 'e26ae849-631a-4682-b946-1f8577f3b5d8',
//       name: 'nest 3',
//       created_at: 2022-11-01T03:36:37.501Z
//     },
//     Tag {
//       id: '10a988aa-8d7f-42c1-9306-e06d40704189',
//       name: 'java 3',
//       created_at: 2022-11-01T03:36:37.501Z
//     }
//   ]
// }