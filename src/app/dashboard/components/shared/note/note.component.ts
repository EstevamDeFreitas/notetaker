import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/dashboard/models/note';
import { AccessLevel } from 'src/app/dashboard/models/accessLevel';
import { NoteService } from 'src/app/dashboard/services/note.service';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {

  public noteForms : FormGroup = new FormGroup({
    title : new FormControl('', [Validators.required]),
    description : new FormControl('')
  })


  @Input() note !: Note;
  @Output() changed : EventEmitter<any> = new EventEmitter<any>();

  public titleInputActive : boolean = false;
  public descriptionInputActive : boolean = false;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.noteForms.controls['title'].setValue(this.note.title);
    this.noteForms.controls['description'].setValue(this.note.description);
  }

  activateTitleInput(){
    this.titleInputActive = true && this.note.accessLevel <= AccessLevel.edit;
  }

  activateDescriptionInput(){
    this.descriptionInputActive = true && this.note.accessLevel <= AccessLevel.edit;
  }

  disableInputs(){
    this.titleInputActive = false;
    this.descriptionInputActive = false;
  }

  isDescriptionEmpty(){
    return this.note.description == "";
  }

  passEditToNote(){
    this.note.title = this.noteForms.controls['title'].value;
    this.note.description = this.noteForms.controls['description'].value;
  }

  editNote(){
    this.passEditToNote();
    this.noteService.editNote(this.note).subscribe({
      next: (res)=>{
        this.disableInputs();
        this.changed.emit();
      }
    })
  }
}
