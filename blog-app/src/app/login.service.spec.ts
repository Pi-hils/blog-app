import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service.checkLogin()).toBeTruthy();
   });

   it('should have postData function', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service.storePostInfo("Blog")).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service.retrieveAllInfo()).toBeTruthy();
   });

   it('should have deleteData function', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service.deletePostInfo("id")).toBeTruthy();
   });

   it('should have putData function', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service.updatePostInfo("title")).toBeTruthy();
   });

});
