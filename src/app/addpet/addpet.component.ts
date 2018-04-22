import {Component, Inject, Input, OnInit} from '@angular/core';
import {Doggies} from '../doggies';
import {PetService} from '../services/pet.service';
import {FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {EditpetComponent} from '../editpet/editpet.component';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  formData: FormData;
  public files: UploadFile[] = [];
  currid: any;
  constructor
  (
    private router: Router,
    private pet: PetService,
    public dialogRef: MatDialogRef<AddpetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  @Input() doggiesForm: Doggies ;
  submitDoggie() {
    this.formData.append('name', this.doggiesForm.name);
    this.formData.append('age', this.doggiesForm.age);
    this.formData.append('desc', this.doggiesForm.desc);
    this.formData.append('breed', this.doggiesForm.breed);
    this.formData.append('gender', this.doggiesForm.gender);
    console.log(this.data['userID']);
    this.pet.addDoggie(this.formData).subscribe(
      () => console.log('doggiesForm is filled'),
      err => { console.error(err); alert('Add Doggie Unsuccesful'); },
      () => { console.log('Add Successful'); alert('Succesfully added doggie');
        this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
        this.router.navigateByUrl('/profile/' + this.data['userID']));
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
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  profile() {
    this.pet.getLoginId().subscribe(resp => {
      this.currid = resp['id'];
      console.log(this.currid);
    });
  }
  clear() {
    this.doggiesForm = new Doggies();
  }
  ngOnInit() {
    this.profile();
    this.formData = new FormData();
    this.doggiesForm = new Doggies();
  }
}
