import { TestBed } from '@angular/core/testing';

import { ServiceloginService } from './servicelogin.service';

describe('ServiceloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceloginService = TestBed.get(ServiceloginService);
    expect(service).toBeTruthy();
  });
});
