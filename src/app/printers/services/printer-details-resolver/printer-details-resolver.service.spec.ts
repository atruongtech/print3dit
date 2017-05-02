import { TestBed, inject } from '@angular/core/testing';

import { PrinterDetailsResolverService } from './printer-details-resolver.service';

describe('PrinterDetailsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrinterDetailsResolverService]
    });
  });

  it('should ...', inject([PrinterDetailsResolverService], (service: PrinterDetailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
