import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesComponent } from './notes/notes.component';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { EachNoteComponent } from './notes/note-list/each-note/each-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesComponent,
    AddNotesComponent,
    NoteListComponent,
    EachNoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
