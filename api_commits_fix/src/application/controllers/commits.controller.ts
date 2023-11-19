/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { CommitsService } from '../../domain/services';
import { DataEntryGetCommitDTO, DataOutGetComitstDTO } from 'src/domain/dtos';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) { }

  @Get()
  getCommits(@Query() data: DataEntryGetCommitDTO): Promise<DataOutGetComitstDTO> {
    return this.commitsService.getCommitsRecord(data);
  }
}
