import { TestBed } from '@angular/core/testing';

import { VehicleListDataResolverService } from './vehicle-list-data-resolver.service';

describe('VehicleListDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleListDataResolverService = TestBed.get(VehicleListDataResolverService);
    expect(service).toBeTruthy();
  });
});
