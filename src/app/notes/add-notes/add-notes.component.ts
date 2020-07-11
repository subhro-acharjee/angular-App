import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import Note from "../notes.model"
@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  constructor() { }
  @Output()
  public addNote=new EventEmitter()
  public flag=false;
  public modal={
    'modal':true,
    'active':false
  }
  public change=()=>{
    this.flag=!this.flag
    this.modal.active=this.flag
  }
  public addData(title,description,file){
    if(description===''){
      alert(`Body Can't be Empty`);
      return
    }
    let note=new Note(title,description,"")
    this.change()
    this.addNote.emit(note)
  }
  ngOnInit(): void {
  }

}
