import { TestBed } from '@angular/core/testing';

import { ExtramoduleService } from './extramodule.service';

describe('ExtramoduleService', () => {
  let service: ExtramoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtramoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
