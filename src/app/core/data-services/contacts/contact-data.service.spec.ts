import { TestBed } from '@angular/core/testing';

import { ContactDataService } from './contact-data.service';

describe('ContactService', () => {
  let service: ContactDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
