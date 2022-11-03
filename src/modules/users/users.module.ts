import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';

import { UsersService } from './users.service';
import { LocalUsersService } from './localusers.service';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [UsersService, LocalUsersService, ...usersProviders],

    exports: [UsersService, LocalUsersService]
  
  })
  export class UsersModule {}
  