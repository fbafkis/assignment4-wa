import { TestBed } from '@angular/core/testing';

import { PListService } from './data.service';

describe('DataService', () => {
  let service: PListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
