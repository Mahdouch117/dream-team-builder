import { Component, signal } from '@angular/core';5
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected readonly title = signal('dream-team-builder');
  name = 'Angular';

} 

// squad = playerService.getPlayers();