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

  constructor(private http: HttpClient) { }
  updateDoggiePic( file, id: number ) {
    const url = 'http://localhost:8000/api/updateDoggiePic/' + id;
    return this.http.post<any>(url, file, httpOptions2).map(res => {
      console.log(res);
    });
  }
  addDoggie(doggieForm) {
    const url = 'http://localhost:8000/api/addDoggie';
    return this.http.post<any>(url, doggieForm, httpOptions).map(res => {
    });
  }
  deleteDoggie( id: number ) {
    const url = 'http://localhost:8000/api/delete/' + id;
    return this.http.delete(url, httpOptions).map(res => {
      return res;
    });
  }
  updateDoggie( id: number, doggieForm) {
    const url = 'http://localhost:8000/api/update/' + id;
    return this.http.post(url, doggieForm, httpOptions).map(res => {
      return res;
    });
  }
  getDoggie(id: number) {
    const url = 'http://localhost:8000/api/getDogProfile/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  getLoginId() {
    const url = 'http://localhost:8000/api/user';
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  getProfile( id: number ) {
    const url = 'http://localhost:8000/api/profile/' + id;
    return this.http.get(url, httpOptions).map(res => {
      return res;
    });
  }
  dogPost(id: number, postForm) {
    const url = 'http://localhost:8000/api/post/' + id;
    return this.http.post(url, postForm, httpOptions2).map(res => {
    });
  }
  viewAllPosts( id: number ) {
    console.log(id);
    const url = 'http://localhost:8000/api/viewAllPosts/' + id;
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  deletePost( id: number ) {
    const url = 'http://localhost:8000/api/deletePost/' + id;
    return this.http.delete(url, httpOptions).map(res => {
      console.log(res);
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
      console.log(res);
      console.log(postForm);
    });
  }
  likePost(id: number ) {
    const url = 'http://localhost:8000/api/likePost/' + id;
    return this.http.get(url, httpOptions2).map(res => {
      console.log(res);
    });
  }
  unlikePost(id: number ) {
    const url = 'http://localhost:8000/api/unlikePost/' + id;
    return this.http.get(url, httpOptions2).map(res => {
      console.log(res);
    });
  }
  isPostLiked(id: number ) {
    const url = 'http://localhost:8000/api/is_post_liked/' + id;
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  likeCount(id: number ) {
    const url = 'http://localhost:8000/api/likeCount/' + id;
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  commentPost(id: number, postForm) {
    const url = 'http://localhost:8000/api/comment_post/' + id;
    return this.http.post(url, postForm, httpOptions).map(res => {
      console.log(res);
    });
  }
  deleteComment( id: number ) {
    const url = 'http://localhost:8000/api/delete_comment/' + id;
    return this.http.delete(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }

}
