import { TestBed } from '@angular/core/testing';

import { StocksDbtestService } from './stocks-dbtest.service';

describe('StocksDbtestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocksDbtestService = TestBed.get(StocksDbtestService);
    expect(service).toBeTruthy();
  });
});
