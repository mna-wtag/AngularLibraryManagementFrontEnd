import { TestBed } from '@angular/core/testing';

import { LibraryUserRegistrationRequestDetailsService } from './library-user-registration-request-details.service';

describe('LibraryUserRegistrationRequestDetailsService', () => {
  let service: LibraryUserRegistrationRequestDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryUserRegistrationRequestDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
