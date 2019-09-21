import { TestBed } from '@angular/core/testing';

import { StocksDbService } from './stocks-db.service';

describe('StocksDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocksDbService = TestBed.get(StocksDbService);
    expect(service).toBeTruthy();
  });
});
