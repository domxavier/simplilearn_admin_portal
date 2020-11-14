import { TestBed } from '@angular/core/testing';

import { ViewCompanyServiceService } from './view-company-service.service';

describe('ViewCompanyServiceService', () => {
  let service: ViewCompanyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCompanyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
