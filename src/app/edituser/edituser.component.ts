import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../User';
import {UserService} from '../services/user.service';
import {FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import { Router } from '@angular/router';
import {PetService} from '../services/pet.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ProfileComponent} from '../profile/profile.component';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  @Input() user: User;
  formData: FormData;
  public files: UploadFile[] = [];
  currid: any;
  constructor
  (
    private router: Router,
    private pet: PetService,
    private userService: UserService,
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  profile() {
    console.log(this.data['userID']) ;
    this.pet.getProfile(this.data['userID']).subscribe(resp => {
      this.user.name = resp['name'];
      this.user.bio = resp['bio'];
      this.user.email = resp['email'];
    });
  }
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  submitUpdate() {
    this.formData.append('bio', this.user.bio);
    this.formData.append('name', this.user.name);
    this.userService.postUpdate(this.formData).subscribe(
      () => console.log('Updating'),
      err => { console.error(err); alert('Update User Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully update user');
        console.log('/profile/' + this.data['userID']);
        this.router.navigateByUrl('/profile',{skipLocationChange: true}).then(() =>
          this.router.navigateByUrl('profile/' + this.data['userID']));
        this.dialogRef.close();
      },
      );

  }
  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry ;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          // You could upload it like this:
          this.formData.append('displaypic', file);
          console.log(this.formData.getAll('displaypic'));
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  ngOnInit() {
    this.profile();
    this.formData = new FormData();
    this.user = new User();
  }

}
