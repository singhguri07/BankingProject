import { TestBed } from '@angular/core/testing';

import { LoancalcService } from './loancalc.service';

describe('LoancalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoancalcService = TestBed.get(LoancalcService);
    expect(service).toBeTruthy();
  });
});
