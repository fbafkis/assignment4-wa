import { TestBed } from '@angular/core/testing';

import { PartiesServiceService } from './parties-service.service';

describe('PartiesServiceService', () => {
  let service: PartiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
