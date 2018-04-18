import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { Doggies } from '../doggies';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import { FileSystemFileEntry } from 'ngx-file-drop';
import {MatDialog} from '@angular/material';
import {AddpetComponent} from '../addpet/addpet.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  online: boolean;
  online2: boolean;
  noDog: boolean;
  view: boolean;
  edit: boolean;
  uid: any;
  tarid: any;
  currid: any;
  display: any;
  public files: UploadFile[] = [];
  relativePath: string;
  public doggies: Doggies[];

  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }
  @Input() updateForm: User;

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
          const formData = new FormData();
          // formData.append('displaypic',file);
          // Headers

          // for (const key in file) {
          //   formData.append(key, file[key]);
          // }
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
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  profile() {
    this.user.getLoginInId().subscribe(resp => {
      this.currid = resp['id'];
    });
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.user.getProfile(this.uid).subscribe(resp => {
         this.updateForm.name = resp['name'] ;
         this.updateForm.bio = resp['bio'];
         this.updateForm.email = resp['email'];
         this.tarid = resp['id'];
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
      if (this.doggies.length === 0 ) {
        this.noDog = true;
        console.log(this.noDog);
      } else {
        this.noDog = false;
      }
    });
  }
  submitUpdate() {
    this.user.postUpdate(this.updateForm).subscribe(
      () => console.log('Updateform is filled'),
      err => { console.error(err); alert('Update Unsuccesful'); this.ngOnInit(); },
      () => { console.log('Update Successful'); alert('Update Succesful'); },
    );
  }
  onClick() {
    this.online = true;
    this.view = false;
    this.online2 = false;
  }
  offClick() {
    this.online = false;
    this.online2 = false;
    this.view = false;
  }
  addPet() {
    this.online2 = true;
    this.view = false;
    this.online = false;
  }
  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AddpetComponent, {
      height: '500px',
      width: '700x',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    this.doggieProfile();
    this.profile();
    this.updateForm = new User();
  }

}
