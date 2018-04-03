import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignIn } from '../SignIn';

import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }

  postSignIn(signing: SignIn) {
    let response: any = {};
    const url = 'http://localhost:8000/api/login';
    return this.http.post(url, signing, httpOptions).map(res => {
      console.log(res);
      response = res;
      localStorage.setItem('token', response['data']['token']);
    });
  }

  postRegister(registerForm) {
    let response: any = {};
    const url = 'http://localhost:8000/api/register';
    return this.http.post(url, registerForm, httpOptions).map(res => {
      console.log(res);
      response = res;
    });
  }

  getUser() {
    let response: any = {};
    const url = 'http://localhost:8000/api/all';
    return this.http.get(url).map(res => {
      console.log(res);
      response = res;
      localStorage.getItem('name');
    });
  }
}
