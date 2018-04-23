import {Component, Inject, Input, OnInit} from '@angular/core';
import {FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {PetService} from '../services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../post';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  @Input() post: Post;
  formData: FormData;
  public files: UploadFile[] = [];
  constructor
  (
    private pet: PetService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AddpostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  addPost() {
    this.formData.append('caption', this.post.caption);
    this.formData.append('location', this.post.location);
    this.pet.dogPost(this.data['dogID'], this.formData).subscribe(
      () => console.log('postForm is filled'),
        err => { console.error(err); alert('Posting Unsuccesful'); },
        () => { console.log('Post Successful'); alert('Succesfully Post');
          this.router.navigateByUrl('/clementwashere', {skipLocationChange: true}).then( () =>
          this.router.navigateByUrl('/dogprofile/' + this.data['dogID']));
          this.dialog.closeAll();
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

          this.formData.append('pic', file);
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
    this.post = new Post();
    this.formData = new FormData();
  }

}
