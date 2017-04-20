import { TestBed, inject } from '@angular/core/testing';

import { FilamentDetailsResolverService } from './filament-details-resolver.service';

describe('FilamentDetailsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilamentDetailsResolverService]
    });
  });

  it('should ...', inject([FilamentDetailsResolverService], (service: FilamentDetailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
