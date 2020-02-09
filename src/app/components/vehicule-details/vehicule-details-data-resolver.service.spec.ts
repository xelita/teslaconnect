import { TestBed } from '@angular/core/testing';

import { VehicleDetailsDataResolverService } from './vehicle-details-data-resolver.service';

describe('VehiculeDetailsDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleDetailsDataResolverService = TestBed.get(VehicleDetailsDataResolverService);
    expect(service).toBeTruthy();
  });
});
