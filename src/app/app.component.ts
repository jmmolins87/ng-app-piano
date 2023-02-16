import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  applySound( num: number ) {
    const audio = new Audio();
    audio.src = `./../assets/sounds/note${ num }.wav`;
    audio.load();
    audio.play();
  }

}
