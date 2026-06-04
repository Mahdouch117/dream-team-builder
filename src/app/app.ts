import { Component, signal } from '@angular/core';5
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected readonly title = signal('dream-team-builder');
  name = 'Angular';

} 

// squad = playerService.getPlayers();