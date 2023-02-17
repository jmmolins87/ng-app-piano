import { Component } from '@angular/core';
import { stylesNotesList } from './app-interface.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public stylesNotesList: stylesNotesList [] = [
    {
      color: 'primary',
      note: 'Do'
    },
    {
      color: 'success',
      note: 'Re'
    },
    {
      color: 'danger',
      note: 'Mi'
    },
    {
      color: 'warning',
      note: 'Fa'
    },
    {
      color: 'info',
      note: 'Sol'
    },
    {
      color: 'dark',
      note: 'La'
    },
    {
      color: 'light',
      note: 'Si'
    },
    {
      color: 'primary',
      note: 'Do'
    }
  ]
  
  getMusicalNote( num: number ): void {
    const AUDIO = new Audio();
    AUDIO.src = `./../assets/sounds/note${ num }.wav`;
    AUDIO.load();
    AUDIO.play();
  }

}
