import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {

  public notes : Array<Note> = new Array();

  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

   public getNotes(){
    this.noteService.getNotes().subscribe({
      next: (res)=>{
        this.notes = res.data;
      }
    })
  }

}
