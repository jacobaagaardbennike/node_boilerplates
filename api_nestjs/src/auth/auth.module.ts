import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AzureADStrategy } from './azure.service';

@Module({
  controllers: [AuthController],
  providers: [AzureADStrategy],
})
export class AuthModule {}
