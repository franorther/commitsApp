import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });

    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data by repo and owner', () => {
    const userName = 'testUser';
    const repo = 'testRepo';

    const testData = [{
      sha: 'mockSha1',
      url: 'mockUrl1',
      message: 'mockMessage1',
      name: 'mockName1',
      date: 'mockDate1',
      photoProfile: 'mockPhotoProfile1',
    },];

    service.getDataByRepoAndOWner(userName, repo).subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(`${service.appSettings.urlBase}commits/?owner=${userName}&repo=${repo}`);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });
});
