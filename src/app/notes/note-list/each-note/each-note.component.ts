import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import Note from '../../notes.model';

@Component({
  selector: 'app-each-note',
  templateUrl: './each-note.component.html',
  styleUrls: ['./each-note.component.scss']
})
export class EachNoteComponent implements OnInit {
  @Input('elem')
  elem:Note
  
  @Output()
  public DeleteNote=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  delete=(id)=>{
    console.log(id);
    
    this.DeleteNote.emit(id);
  }

}
