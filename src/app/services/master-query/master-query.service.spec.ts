import { TestBed } from '@angular/core/testing';

import { MasterQueryService } from './master-query.service';

describe('MasterQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterQueryService = TestBed.get(MasterQueryService);
    expect(service).toBeTruthy();
  });
});
