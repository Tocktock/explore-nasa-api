import { DBConfigModule } from './config/database/config.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DBConfigModule, UsersModule],
})
export class AppModule {}
