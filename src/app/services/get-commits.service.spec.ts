import { TestBed } from '@angular/core/testing';

import { GetCommitsService } from './get-commits.service';

describe('GetCommitsService', () => {
  let service: GetCommitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCommitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
