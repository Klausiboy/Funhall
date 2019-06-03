import { TestBed } from '@angular/core/testing';

import { FrontpageLoaderService } from './frontpage-loader.service';

describe('FrontpageLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontpageLoaderService = TestBed.get(FrontpageLoaderService);
    expect(service).toBeTruthy();
  });
});
