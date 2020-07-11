import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import Notes from "../notes.model"

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  @Input('newNote')
  public _X:Notes
  public get X(){
    return this._X
  }
  public set X(Note:Notes){
    console.log(Note);
    this._X=Note
  }
  arrOfRe:Array<Notes> =[
    new Notes('Test1','This is Test','null')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    let m=changes._X.currentValue
    console.log(changes._X.currentValue);
    if(m){
      this.arrOfRe.push(m)
    }
    
    
  }
  
  public remove=(event)=>{
    console.log(event);
    
    this.arrOfRe=this.arrOfRe.filter((elem)=>{
     
     return elem.id!==event
      
    })
  }

}
