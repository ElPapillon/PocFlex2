import { TestBed } from '@angular/core/testing';

import { LoginUserApiService } from './login-user-api.service';

describe('LoginUserApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginUserApiService = TestBed.get(LoginUserApiService);
    expect(service).toBeTruthy();
  });
});
