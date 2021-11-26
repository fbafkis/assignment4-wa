import { TestBed } from '@angular/core/testing';

import { MemberPartiesServiceService } from './member-parties-service.service';

describe('MemberPartiesServiceService', () => {
  let service: MemberPartiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberPartiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
