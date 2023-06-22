import { TestBed } from '@angular/core/testing';

import { PoBlogDataService } from './po-blog-data.service';

describe('PoBlogDataService', () => {
  let service: PoBlogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoBlogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
