/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { GitHubService } from '../../infraestructure/config';
import { DataEntryGetCommitDTO } from '../dtos/';

@Injectable()
export class CommitsService {

  private readonly logger = new Logger(CommitsService.name);

  constructor(
    private readonly gitHubService: GitHubService,
  ) { }

  async getCommitsRecord(data: DataEntryGetCommitDTO): Promise<any> {
    const { owner, repo } = data;
    try {
      //Check if the commits exist for the repo and owner received/
      const commitsRaw = await this.gitHubService.getCommits(owner, repo);
      if (commitsRaw.length === 0) { throw new HttpException('Commits not found', HttpStatus.NOT_FOUND) };
      this.logger.log("Data extracted successfully");
      return commitsRaw;
      
    } catch (error) {
      this.logger.error(error);
      throw error
    }

  }


}
