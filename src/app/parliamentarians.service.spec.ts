import {TestBed} from '@angular/core/testing';
import {ParliamentariansService} from './parliamentarians.service';

describe('ParliamentariansService', () => {
  let service: ParliamentariansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParliamentariansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
