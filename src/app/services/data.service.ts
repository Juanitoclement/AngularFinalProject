import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignIn } from '../SignIn';

import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.token}`
  }),
};

@Injectable()
export class DataService {

  token = localStorage.token;

  constructor(private http: HttpClient) {
  }

  postSignIn(signing: SignIn) {
    let response: any = {};
    const url = 'http://localhost:8000/api/login';
    return this.http.post<any>(url, signing, httpOptions).map(res => {
      console.log(res);
      response = res;
      if (res && res.data.token){
        localStorage.setItem('token', response['data']['token']);
        // setItem('key', 'value')
        return res;
      }
    });
  }

  postRegister(registerForm) {
    const url = 'http://localhost:8000/api/register';
    return this.http.post(url, registerForm, httpOptions).map(res => {
      console.log(res);
    });
  }
  getUser() {
    const url = 'http://localhost:8000/api/getName';
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }

  logout() {
    localStorage.removeItem('token');
  }
}
