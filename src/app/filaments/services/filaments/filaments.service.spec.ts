import { TestBed, inject } from '@angular/core/testing';

import { FilamentsService } from './filaments.service';

describe('FilamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilamentsService]
    });
  });

  it('should ...', inject([FilamentsService], (service: FilamentsService) => {
    expect(service).toBeTruthy();
  }));
});
