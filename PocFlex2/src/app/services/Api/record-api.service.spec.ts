import { TestBed } from '@angular/core/testing';

import { RecordApiService } from './record-api.service';

describe('RecordApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordApiService = TestBed.get(RecordApiService);
    expect(service).toBeTruthy();
  });
});
