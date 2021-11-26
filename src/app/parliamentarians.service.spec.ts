import { TestBed } from '@angular/core/testing';

import { ParliamentariansServiceService } from './parliamentarians.service';

describe('ParliamentariansServiceService', () => {
  let service: ParliamentariansServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParliamentariansServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
