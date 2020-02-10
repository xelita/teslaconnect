import {TestBed} from '@angular/core/testing';

import {SignInDataResolverService} from './sign-in-data-resolver.service';

describe('SignInDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignInDataResolverService = TestBed.get(SignInDataResolverService);
    expect(service).toBeTruthy();
  });
});
