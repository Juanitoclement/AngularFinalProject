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

  postSignIn(signing: SignIn) {
    let response: any = {};
    const url = 'https://api.mypetrepublic.me/login';
    return this.http.post<any>(url, signing, httpOptions).map(res => {
      response = res;
      if (res && res.data.token) {
        localStorage.setItem('token', response['data']['token']);
        return res;
      }
    });
  }
  postRegister(registerForm) {
    const url = 'https://api.mypetrepublic.me/register';
    return this.http.post<any>(url, registerForm, httpOptions).map(res => {
    });
  }
  postUpdate(updateForm) {
    const url = 'https://api.mypetrepublic.me/update';
    return this.http.post<any>(url, updateForm, httpOptions2).map(res => {
    });
  }
  getUser() {
    const url = 'https://api.mypetrepublic.me/getName';
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  following(id: number) {
    const url = 'https://api.mypetrepublic.me/countFollowings/' + id ;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  follower(id: number) {
    const url = 'https://api.mypetrepublic.me/countFollowers/' + id ;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  goFollow(id: number, updateForm ) {
    const url = 'https://api.mypetrepublic.me/profile/' + id + '/follow';
    return this.http.post(url, updateForm, httpOptions).map(res => {
    });
  }
  goUnfollow(id: number, updateForm) {
    const url = 'https://api.mypetrepublic.me/profile/' + id + '/unfollow';
    return this.http.post<any>(url, updateForm, httpOptions).map(res => {
    });
  }
  checkFollow(id: number) {
    const url = 'https://api.mypetrepublic.me/profile/is_followed/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  viewFollowers(id: number) {
    const url = 'https://api.mypetrepublic.me/viewFollowers/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  viewFollowings(id: number) {
    const url = 'https://api.mypetrepublic.me/viewFollowings/' + id;
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  getNotification () {
    const url = 'https://api.mypetrepublic.me/notifications' ;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  logout() {
    const url = 'https://api.mypetrepublic.me/logout';
      localStorage.removeItem('token');
      return this.http.get(url, httpOptions);
  }

  postYouMightLike() {
    const url = 'https://api.mypetrepublic.me/postYouMightLike';
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  readNotif() {
    const url = 'https://api.mypetrepublic.me/readNotif';
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  readNotification(id: number) {
    const url = 'https://api.mypetrepublic.me/readNotifications/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }

  clearAll() {
    const url = 'https://api.mypetrepublic.me/clearAllNotif';
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
}
