import { Component, OnInit } from '@angular/core';
import Notes from "../notes.model"

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  arrOfRe:Array<Notes> =[
    new Notes('Test1','This is Test','null')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
