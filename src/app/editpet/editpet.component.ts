import {Component, Input, OnInit, Inject} from '@angular/core';
import {Doggies} from '../doggies';
import {ActivatedRoute} from '@angular/router';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import {PetService} from '../services/pet.service';
import {FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  @Input() doggiesForm: Doggies ;
  dogName: any;
  dogGender: any;
  dogDisplay: any;
  dogBreed: any;
  dogAge: any;
  dogDesc: any;
  formData: FormData;
  public files: UploadFile[] = [];
  constructor
  (
    private pet: PetService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<EditpetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  updateDoggie() {
    this.formData.append('name', this.doggiesForm.name);
    this.formData.append('desc', this.doggiesForm.desc);
    this.formData.append('age', this.doggiesForm.age);
    this.formData.append('gender', this.doggiesForm.gender);
    this.formData.append('breed', this.doggiesForm.breed);
    this.pet.updateDoggie(this.data['dogID'], this.formData).subscribe(
      () => console.log('doggiesForm is filled'),
      err => { console.error(err); alert('Update Doggie Unsuccesful'); },
      () => { console.log('Update Successful'); alert('Succesfully update doggie');
        this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
          this.router.navigateByUrl('/dogprofile/' + this.data['dogID']));
      this.dialogRef.close(); },
    );
  }
  profile() {
    this.pet.getDoggie(this.data['dogID']).subscribe(resp => {
      this.doggiesForm.name = resp['name'];
      this.doggiesForm.gender = resp['gender'];
      this.doggiesForm.age = resp['age'];
      this.doggiesForm.breed = resp['breed'];
      this.doggiesForm.desc = resp['desc'];
      this.doggiesForm.displaypic = resp['displaypic'];
      this.doggiesForm.id = resp['owner_id'];
      console.log(this.doggiesForm.name);
    });
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
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  ngOnInit() {
    this.profile();
    this.formData = new FormData();
    this.doggiesForm = new Doggies();
  }

}
