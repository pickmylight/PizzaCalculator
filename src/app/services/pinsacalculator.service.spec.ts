import { TestBed } from '@angular/core/testing';

import { PinsacalculatorService } from './pinsacalculator.service';

describe('PinsacalculatorService', () => {
  let service: PinsacalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinsacalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
