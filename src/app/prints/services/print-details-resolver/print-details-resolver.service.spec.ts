import { TestBed, inject } from '@angular/core/testing';

import { PrintDetailsResolverService } from './print-details-resolver.service';

describe('PrintDetailsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintDetailsResolverService]
    });
  });

  it('should ...', inject([PrintDetailsResolverService], (service: PrintDetailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
