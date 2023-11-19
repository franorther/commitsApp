import { TestBed } from '@angular/core/testing';

import { ListDataDynamoService } from './list-data-dynamo.service';

describe('ListDataDynamoService', () => {
  let service: ListDataDynamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDataDynamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
