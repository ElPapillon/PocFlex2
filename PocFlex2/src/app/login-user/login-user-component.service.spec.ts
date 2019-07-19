import { TestBed } from '@angular/core/testing';

import { LoginUserComponentService } from './login-user-component.service';

describe('LoginUserComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginUserComponentService = TestBed.get(LoginUserComponentService);
    expect(service).toBeTruthy();
  });
});
