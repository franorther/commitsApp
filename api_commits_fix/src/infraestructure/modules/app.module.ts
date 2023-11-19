/* eslint-disable prettier/prettier */
import { HttpException, Logger, Module } from '@nestjs/common';
import { CommitsController } from './../../application/controllers';
import { CommitsService } from '../../domain/services';
import { GitHubService } from '../config';
import { Octokit } from 'octokit';
import { DataTransformService } from '../../domain/data-transformers';


@Module({
  imports: [],
  controllers: [CommitsController],
  providers: [
    CommitsService,
    GitHubService,
    Octokit,
    HttpException,
    Logger,
    DataTransformService
  ],
})
export class AppModule { }
