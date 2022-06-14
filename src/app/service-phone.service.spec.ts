import { TestBed } from '@angular/core/testing';

import { ServicePhoneService } from './service-phone.service';

describe('ServicePhoneService', () => {
  let service: ServicePhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
