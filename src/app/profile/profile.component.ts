import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';
import {Doggies} from '../doggies';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileSystemFileEntry, FileSystemEntryMetadata, FileSystemEntry, FileSystemDirectoryEntry }from 'ngx-file-drop';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  online: boolean;
  view: boolean;
  edit: boolean;
  uid: any;
  tarid: any;
  currid: any;
  uname: any;
  uemail: any;
  ubio: any;
  uusername: any;
  display: any;
  public files: UploadFile[] = [];
  relativePath:string;

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry ;
          //
          // var formData = new FormData();
          // formData.append('key1', 'value1');
          // formData.append('key2', 'value2');
          // console.log("hello");
          // for (var pair of formData.entries()) {
          //     console.log("helloww");
          //     console.log(pair[0]+ ', ' + pair[1]);
          // }


        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          // You could upload it like this:
          var formData = new FormData();
          // formData.append('displaypic',file);
          // Headers

          for(const key in file){
            formData.append(key, file[key]);
          }
          console.log(formData.getAll('key'));

          this.user.updatepic(file).subscribe();
          //
          // this.http.post('http://localhost:8000/api/updateDisplayPic', formData, { headers: headers, responseType: 'blob' })
          // .subscribe(data => {
          //   console.log(formData.getAll('displaypic'));
          // })

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }



  public doggies: Doggies[];
  constructor(private user: UserService, private route: ActivatedRoute,private http: HttpClient) {
  }
  @Input() updateForm: User;

  profile() {



    this.user.getLoginInId().subscribe(resp => {
      this.currid = resp['id'];
      console.log(this.currid);
      console.log(this.uid);
    });
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.user.getProfile(this.uid).subscribe(resp => {
        this.uemail = resp['email'],
        this.uname = resp['name'],
        this.tarid = resp['id'] ,
        this.ubio = resp['bio'],
        this.uusername = resp['username'],
        this.display = resp['displaypic'];
      if (this.tarid !== this.currid) {
        console.log('View Mode');
        this.edit = false;
      }  else { this.edit = true; }
    });
  }
  doggieProfile() {
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.user.getProfile(this.uid).subscribe((doggies: Doggies[]) => {
      this.doggies  = doggies['doggies'] ;

      console.log(this.doggies );
    });
  }
  submitUpdate() {
    this.user.postUpdate(this.updateForm).subscribe(
      () => console.log('Updateform is filled'),
      err => { console.error(err); alert('Update Unsuccesful'); this.ngOnInit(); },
      () => { console.log('Update Successful'); alert('Update Succesful'); },
    );
  }
  // onFileUpload(files: FileList) {
  //   this.updateForm.displaypic = files.item(0);
  //   console.log(this.updateForm.displaypic);
  // }
  // uploadFileToActivity() {
  //   UserService.postFile(this.selectedFile).subscribe(data => {
  //     console.log('Upload Successful');
  //     }, error => {
  //       console.log(error);
  //     });
  // }
  onClick() {
    this.online = true;
  }
  offClick() {
    this.online = false;
  }
  ngOnInit() {
    this.doggieProfile();
    this.profile();
    this.updateForm = new User();
    this.updateForm.name = '';
    this.updateForm.bio = '';
  }

}
