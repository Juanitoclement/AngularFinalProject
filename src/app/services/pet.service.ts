import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.token}`
  }),
};

@Injectable()
export class PetService {

  constructor(private http: HttpClient) { }

  addDoggie(doggieForm) {
    const url = 'http://localhost:8000/api/addDoggie';
    return this.http.post<any>(url, doggieForm, httpOptions).map(res => {
      console.log(res);
    });
  }
  deleteDoggie( id: number ) {
    const url = 'http://localhost:8000/api/delete/' + id;
    return this.http.delete(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  updateDoggie( id: number, doggieForm) {
    console.log(id);
    console.log(doggieForm);
    const url = 'http://localhost:8000/api/update/' + id;
    return this.http.post(url, doggieForm, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  getDoggie(id: number) {
    const url = 'http://localhost:8000/api/getDogProfile/' + id;
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  getLoginId() {
    const url = 'http://localhost:8000/api/user';
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
  getProfile( id: number ) {
    const url = 'http://localhost:8000/api/profile/' + id;
    return this.http.get(url, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }
}
