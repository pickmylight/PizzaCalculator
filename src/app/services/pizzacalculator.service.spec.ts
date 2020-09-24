import { TestBed } from '@angular/core/testing';

import { PizzacalculatorService } from './pizzacalculator.service';

describe('PizzacalculatorService', () => {
  let service: PizzacalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzacalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
