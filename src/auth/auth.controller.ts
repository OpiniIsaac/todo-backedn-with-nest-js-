import { Body, Controller, Post } from '@nestjs/common';
import { User } from './auth.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signUp(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.authService.signUp(password, username);
  }
  @Post('signin')
  signIn(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.authService.signIn(username, password);
  }
}
