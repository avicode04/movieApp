import { TestBed } from '@angular/core/testing';

import { GdetailsService } from './gdetails.service';

describe('GdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GdetailsService = TestBed.get(GdetailsService);
    expect(service).toBeTruthy();
  });
});
