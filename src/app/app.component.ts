import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public stylesList: string [] = [ 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light' ];
  
  applySound( num: number ) {
    const audio = new Audio();
    audio.src = `./../assets/sounds/note${ num }.wav`;
    audio.load();
    audio.play();
  }

}
