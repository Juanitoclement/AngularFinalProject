import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.token}`
  }),
};

@Injectable()
export class FileService {
  constructor(private http: HttpClient) { }

  updatepic( file ) {
    const url = 'http://localhost:8000/api/updateDisplayPic';
    return this.http.post<any>(url, file, httpOptions).map(res => {
      console.log(res);
    });
  }
}
