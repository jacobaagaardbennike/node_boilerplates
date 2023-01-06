import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Azure Test controller')
@Controller('auth')
export class AuthController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // @Get('unprotected')
  // unprotected(): string {
  //   return 'Unprotected';
  // }

  @UseGuards(AuthGuard('oauth-bearer'))
  @Get()
  protected(): string {
    return 'Protected';
  }
}
