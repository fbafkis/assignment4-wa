import {TestBed} from '@angular/core/testing';
import {MemberPartiesService} from './member-parties.service';

describe('MemberPartiesService', () => {
  let service: MemberPartiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberPartiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
