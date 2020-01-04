/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetuserService } from './getuser.service';

describe('Service: Getuser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetuserService]
    });
  });

  it('should ...', inject([GetuserService], (service: GetuserService) => {
    expect(service).toBeTruthy();
  }));
});
