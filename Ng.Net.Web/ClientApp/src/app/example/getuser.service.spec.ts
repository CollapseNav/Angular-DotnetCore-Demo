/*
 * @Author: CollapseNav
 * @Date: 2020-01-04 22:04:55
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 21:46:10
 * @Description:
 */
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('Service: Getuser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
