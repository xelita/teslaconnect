import { TestBed } from '@angular/core/testing';

import { TeslaService } from './tesla.service';

describe('TeslaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeslaService = TestBed.get(TeslaService);
    expect(service).toBeTruthy();
  });
});
