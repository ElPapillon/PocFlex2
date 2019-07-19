import { TestBed } from '@angular/core/testing';

import { RegisterUserApiService } from './register-user-api.service';

describe('RegisterUserApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterUserApiService = TestBed.get(RegisterUserApiService);
    expect(service).toBeTruthy();
  });
});
