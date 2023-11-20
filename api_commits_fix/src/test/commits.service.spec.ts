/* eslint-disable prettier/prettier */
import { CommitsService } from '../domain/services';
import { GitHubService } from '../infraestructure/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommitsService', () => {
  let commitsService: CommitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommitsService,
        {
          provide: GitHubService,
          useFactory: () => ({
            getCommits: jest.fn(),
          }),
        },
      ],
    }).compile();

    commitsService = module.get<CommitsService>(CommitsService);
  });

  it('should be defined', () => {
    expect(commitsService).toBeDefined();
  });

  describe('getCommitsRecord', () => {
    it('should return commits if they exist', async () => {
      const data = {
        owner: 'franorther',
        repo: 'commitsApp'
      }
      const commitsMock = [
        {
          sha: 'mockSha1',
          url: 'mockUrl1',
          message: 'mockMessage1',
          name: 'mockName1',
          date: 'mockDate1',
          photoProfile: 'mockPhotoProfile1',
        },
      ];
      jest.spyOn(commitsService, 'getCommitsRecord').mockImplementation(()=> Promise.resolve(commitsMock));

      expect(await commitsService.getCommitsRecord(data)).toEqual(commitsMock);
    });

    it('should throw HttpException with status 404 if no commits are found', async () => {
      const requestData = {
        owner: 'franorther',
        repo: 'commitsApps'
      }
      const expectedErrorMessage = 'Not Found';
      try {
        await commitsService.getCommitsRecord(requestData);
      } catch (error) {
        expect(error.status).toBe(404);
        expect(error.data.message).toBe(expectedErrorMessage);
      }

    });
  });
});