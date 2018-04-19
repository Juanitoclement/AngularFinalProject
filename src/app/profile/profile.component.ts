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
import {PetService} from '../services/pet.service';
import {FileService} from '../services/file.service';

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
  formData: FormData;
  uid: any;
  tarid: any;
  currid: any;
  display: any;
  public files: UploadFile[] = [];
  relativePath: string;
  public doggies: Doggies[];

  constructor(
    private user: UserService,
    private fs: FileService,
    private pet: PetService,
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
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  profile() {
    this.pet.getLoginId().subscribe(resp => {
      this.currid = resp['id'];
    });
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.pet.getProfile(this.uid).subscribe(resp => {
         this.updateForm.name = resp['name'] ;
         this.updateForm.bio = resp['bio'];
         this.updateForm.email = resp['email'];
         this.tarid = resp['id'];
         this.display = resp['displaypic'];
         console.log(this.currid);
      if (this.tarid !== this.currid) {
        console.log(this.currid);
        console.log('View Mode');
        this.edit = false;
      }  else { this.edit = true; }
    });
  }
  doggieProfile() {
    this.route.params.subscribe(params => this.uid = params['id'] );
    this.pet.getProfile(this.uid).subscribe((doggies: Doggies[]) => {
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
      () => console.log('Deleting'),
      err => { console.error(err); alert('Update Doggie Unsuccesful'); this.ngOnInit(); },
      () => { console.log('Update Successful'); alert('Succesfully update doggie');
      });
      this.fs.updatepic(this.formData).subscribe(
        () => console.log('uploading'),
        err => { console.error(err); alert(' Update DisplayPic Unsuccesful'); this.ngOnInit(); },
        () => { console.log('Update Successful'); alert('Succesfully update displayPic'); this.online = false;
        });
  }
  following() {
    this.user.following().subscribe( res => {
      this.updateForm.followings = res;
      }
    );
  }
  follower() {
    this.user.follower().subscribe( res => {
        this.updateForm.followers = res;
      }
    );
  }
  onClick() {
    this.online = true;
    this.view = false;
    this.online2 = false;
    this.noDog = true;
  }
  offClick() {
    this.online = false;
    this.online2 = false;
    this.view = false;
    this.noDog = false;
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
    this.follower();
    this.following();
    this.doggieProfile();
    this.profile();
    this.updateForm = new User();
  }

}
