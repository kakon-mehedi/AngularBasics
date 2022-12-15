import { TestBed } from '@angular/core/testing';

import { KakonServiceService } from './kakon-service.service';

describe('KakonServiceService', () => {
  let service: KakonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KakonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
