import { Component, OnInit } from '@angular/core';
import Note from "./notes.model"
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public newNode=undefined
  constructor() { }
  public addNewNote(event:Note){
    this.newNode=event
  }
  ngOnInit(): void {
  }

}
