import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
	process.env.GOOGLE_CLIENT_ID, 
	process.env.GOOGLE_CLIENT_SECRET
);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  async login(
	@Body('token') token
  ): Promise<any> {
	const ticket = await client.verifyIdToken({
	idToken: token,
	audience: process.env.GOOGLE_CLIENT_ID
  })
  console.log(ticket.getPayload())
  return {
	success: true
  }
  }
}

// 유튜브 33분 40초
// 로그인정보 토큰으로 만들어서 서버에 티켓으로 가져오기까지 성공함

// 클라이언트 키는법 yarn dev 
// 서버 키는법  yarn start::dev