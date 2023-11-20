/* eslint-disable prettier/prettier */
import { HttpException, Logger, Module } from '@nestjs/common';
import { CommitsController } from './../../application/controllers';
import { CommitsService } from '../../domain/services';
import { GitHubService } from '../config';
import { Octokit } from 'octokit';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
  ],
  controllers: [CommitsController],
  providers: [
    CommitsService,
    GitHubService,
    Octokit,
    HttpException,
    Logger,
  ],
})
export class AppModule { 
  static port: number;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get<number>('API_PORT');
  }

}
