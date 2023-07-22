import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { INote } from 'src/shared/data';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  notes:INote[] = [];

  constructor(
    //private dialog : MatDialog,
    private noteservice: NotesService){
    this.noteservice.list().subscribe( response=> {
      this.notes = [...response.Items];
      console.log(this.notes);
    })
  }
}