import { TestBed } from '@angular/core/testing';

import { WebsitesServiceService } from './websites.service';

describe('WebsitesServiceService', () => {
  let service: WebsitesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsitesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
