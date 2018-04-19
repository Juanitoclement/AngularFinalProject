import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignIn } from '../SignIn';

import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.token}`
  }),
};


@Injectable()
export class UserService {

  token = localStorage.token;
  constructor(private http: HttpClient) {
  }

  postSignIn(signing: SignIn) {
    let response: any = {};
    const url = 'http://localhost:8000/api/login';
    return this.http.post<any>(url, signing, httpOptions).map(res => {
      console.log(res);
      response = res;
      if (res && res.data.token) {
        localStorage.setItem('token', response['data']['token']);
        return res;
      }
    });
  }
  postRegister(registerForm) {
    const url = 'http://localhost:8000/api/register';
    return this.http.post<any>(url, registerForm, httpOptions).map(res => {
      console.log(res);
    });
  }
  postUpdate(updateForm) {
    const url = 'http://localhost:8000/api/update';
    return this.http.post<any>(url, updateForm, httpOptions).map(res => {
      console.log(res);
      console.log(updateForm.name);
    });
  }
  getUser() {
    const url = 'http://localhost:8000/api/getName';
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  following() {
    const url = 'http://localhost:8000/api/countFollowings';
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  follower() {
    const url = 'http://localhost:8000/api/countFollowers';
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  logout() {
    const url = 'http://localhost:8000/api/logout';
      localStorage.removeItem('token');
      return this.http.get(url, httpOptions);
  }
}
