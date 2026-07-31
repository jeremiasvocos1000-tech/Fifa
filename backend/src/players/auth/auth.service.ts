import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {

    if (username !== 'Admin' || password !== '1234') {
      throw new UnauthorizedException();
    }

    return {
      access_token: this.jwtService.sign({
        username,
      }),
    };
  }
}