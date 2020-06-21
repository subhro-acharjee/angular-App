import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public github_link='https://github.com/joseph444';
  
  constructor() { }

  ngOnInit(): void {
  }

  search(val){
    alert(val);
  }

}
