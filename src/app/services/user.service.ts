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
const httpOptions2 = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.token}`
  }),
};

@Injectable()
export class UserService {

  token = localStorage.token;
  constructor(private http: HttpClient) {
  }
  updatepic( file ) {
    const url = 'http://localhost:8000/api/updateDisplayPic';
    return this.http.post<any>(url, file, httpOptions2).map(res => {
    });
  }

  postSignIn(signing: SignIn) {
    let response: any = {};
    const url = 'http://localhost:8000/api/login';
    return this.http.post<any>(url, signing, httpOptions).map(res => {
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
    });
  }
  postUpdate(updateForm) {
    const url = 'http://localhost:8000/api/update';
    return this.http.post<any>(url, updateForm, httpOptions2).map(res => {
      console.log(res);
    });
  }
  getUser() {
    const url = 'http://localhost:8000/api/getName';
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  following(id: number) {
    const url = 'http://localhost:8000/api/countFollowings/' + id ;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  follower(id: number) {
    const url = 'http://localhost:8000/api/countFollowers/' + id ;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  goFollow(id: number, updateForm ) {
    const url = 'http://localhost:8000/api/profile/' + id + '/follow';
    return this.http.post(url, updateForm, httpOptions).map(res => {
    });
  }
  goUnfollow(id: number, updateForm) {
    const url = 'http://localhost:8000/api/profile/' + id + '/unfollow';
    return this.http.post<any>(url, updateForm, httpOptions).map(res => {
    });
  }
  checkFollow(id: number) {
    const url = 'http://localhost:8000/api/profile/is_followed/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  viewFollowers(id: number) {
    const url = 'http://localhost:8000/api/viewFollowers/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  viewFollowings(id: number) {
    const url = 'http://localhost:8000/api/viewFollowings/' + id;
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  getNotification () {
    const url = 'http://localhost:8000/api/notifications' ;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  logout() {
    const url = 'http://localhost:8000/api/logout';
      localStorage.removeItem('token');
      return this.http.get(url, httpOptions);
  }

  postYouMightLike() {
    const url = 'http://localhost:8000/api/postYouMightLike';
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
}
