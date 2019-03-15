import { TestBed } from '@angular/core/testing';

import { ServicesignupService } from './servicesignup.service';

describe('ServicesignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesignupService = TestBed.get(ServicesignupService);
    expect(service).toBeTruthy();
  });
});
