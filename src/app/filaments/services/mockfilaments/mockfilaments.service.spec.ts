import { TestBed, inject } from '@angular/core/testing';

import { MockfilamentsService } from './mockfilaments.service';

describe('MockfilamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockfilamentsService]
    });
  });

  it('should ...', inject([MockfilamentsService], (service: MockfilamentsService) => {
    expect(service).toBeTruthy();
  }));
});
