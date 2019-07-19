import { TestBed } from '@angular/core/testing';

import { RegisterUserComponentService } from './register-user-component.service';

describe('RegisterUserComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterUserComponentService = TestBed.get(RegisterUserComponentService);
    expect(service).toBeTruthy();
  });
});
