import { TestBed } from '@angular/core/testing';

import { StockDBTestService } from './stock-dbtest.service';

describe('StockDBTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockDBTestService = TestBed.get(StockDBTestService);
    expect(service).toBeTruthy();
  });
});
