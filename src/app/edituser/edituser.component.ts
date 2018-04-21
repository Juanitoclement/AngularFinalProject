import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../User';
import {UserService} from '../services/user.service';
import {FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../services/pet.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {ProfileComponent} from '../profile/profile.component';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  formData: FormData;
  public files: UploadFile[] = [];
  router: Router;
  currid: any;
  url: any;
  constructor
  (
    private pet: PetService,
    private route: ActivatedRoute,
    private userService: UserService,
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  @Input() user: User;

  profile() {
    console.log(this.data['userID']) ;
    this.pet.getProfile(this.data['userID']).subscribe(resp => {
      this.user.name = resp['name'];
      this.user.bio = resp['bio'];
      this.user.email = resp['email'];
      console.log(this.user.name);
    });

  }
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  submitUpdate() {
    this.userService.postUpdate(this.user).subscribe(
      () => console.log('Updating'),
      err => { console.error(err); alert('Update Doggie Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully update doggie');
      });
    this.userService.updatepic(this.formData).subscribe(
      () => console.log('uploading'),
      err => { console.error(err); alert(' Update DisplayPic Unsuccesful Invalid file extention please use .jpg only'); },
      () => { console.log('Update Successful'); alert('Succesfully update displayPic');
      });
    this.dialogRef.close();
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
          this.formData = new FormData();
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
    this.user = new User();
  }

}
