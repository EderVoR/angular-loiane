import { TestBed } from '@angular/core/testing';

import { SerttingsService } from './serttings.service';

describe('SerttingsService', () => {
  let service: SerttingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerttingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
