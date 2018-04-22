import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
export class PetService {
  public url = 'http://localhost:8000/api/';
  constructor
  (
    private http: HttpClient
  ) { }
  addDoggie(doggieForm) {
    return this.http.post<any>(this.url + 'addDoggie/', doggieForm, httpOptions2).map(res => {
    });
  }
  deleteDoggie( id: number ) {
    // const url = 'http://localhost:8000/api/delete/' + id;
    return this.http.delete(this.url + 'delete/' + id, httpOptions).map(res => {
      return res;
    });
  }
  updateDoggie( id: number, doggieForm) {
    // const url = 'http://localhost:8000/api/update/' + id;
    return this.http.post(this.url + 'update/' + id, doggieForm, httpOptions2).map(res => {
      return res;
    });
  }
  getDoggie(id: number) {
    // const url = 'http://localhost:8000/api/getDogProfile/' + id;
    return this.http.get(this.url + 'getDogProfile/' + id, httpOptions).map(res => {
      return res;
    });
  }
  getLoginId() {
    // const url = 'http://localhost:8000/api/user';
    return this.http.get(this.url + 'user', httpOptions).map(res => {
      return res;
    });
  }
  getProfile( id: number ) {
    // const url = 'http://localhost:8000/api/profile/' + id;
    return this.http.get(this.url + 'profile/' + id, httpOptions).map(res => {
      return res;
    });
  }
  dogPost(id: number, postForm) {
    // const url = 'http://localhost:8000/api/post/' + id;
    return this.http.post(this.url + 'post/' + id, postForm, httpOptions2).map(res => {
    });
  }
  viewAllPosts( id: number ) {
    // const url = 'http://localhost:8000/api/viewAllPosts/' + id;
    return this.http.get(this.url + 'viewAllPosts/' + id, httpOptions).map(res => {
      return res;
    });
  }
  deletePost( id: number ) {
    const url = 'http://localhost:8000/api/deletePost/' + id;
    return this.http.delete(url, httpOptions).map(res => {
      return res;
    });
  }
  viewPost( id: number) {
    const url = 'http://localhost:8000/api/viewPost/' + id;
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  updatePost(id: number, postForm) {
    const url = 'http://localhost:8000/api/updatePost/' + id;
    return this.http.post(url, postForm, httpOptions2).map(res => {
    });
  }
  likePost(id: number ) {
    const url = 'http://localhost:8000/api/likePost/' + id;
    return this.http.get(url, httpOptions2).map(res => {
    });
  }
  unlikePost(id: number ) {
    const url = 'http://localhost:8000/api/unlikePost/' + id;
    return this.http.get(url, httpOptions2).map(res => {
    });
  }
  isPostLiked(id: number ) {
    const url = 'http://localhost:8000/api/is_post_liked/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  likeCount(id: number ) {
    const url = 'http://localhost:8000/api/likeCount/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  commentPost(id: number, postForm) {
    const url = 'http://localhost:8000/api/comment_post/' + id;
    return this.http.post(url, postForm, httpOptions).map(res => {
    });
  }
  deleteComment( id: number ) {
    const url = 'http://localhost:8000/api/delete_comment/' + id;
    return this.http.delete(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  commentCount( id: number ) {
    const url = 'http://localhost:8000/api/commentCount/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  getComment( id: number ) {
    const url = 'http://localhost:8000/api/getComment/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  getDogID( id: number ) {
    const url = 'http://localhost:8000/api/getDogID/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
}
