/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { GitHubService } from '../../infraestructure/config';
import { DataEntryGetCommitDTO } from '../dtos/';
import { DataTransformService } from '../data-transformers';

@Injectable()
export class CommitsService {

  private readonly logger = new Logger(CommitsService.name);

  constructor(
    private readonly gitHubService: GitHubService,
    private readonly dataTransformService: DataTransformService
  ) { }

  async getCommitsRecord(data: DataEntryGetCommitDTO): Promise<any> {
    const { owner, repo } = data;
    try {
      //Check if the commits exist for the repo and owner received/
      const commitsRaw = await this.gitHubService.getCommits(owner, repo);
      if (commitsRaw.data.length === 0) { throw new HttpException('Commits not found', HttpStatus.NOT_FOUND) }
      const dataMOdified = this.dataTransformService.transformData(commitsRaw.data);
      return dataMOdified;
      
    } catch (error) {
      this.logger.error(error);
      throw error
    }

  }


}
