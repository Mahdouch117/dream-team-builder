import { Component, signal } from '@angular/core';5
import { PlayerCard } from './player-card/player-card';
import { Player } from './player-card/interfaces/player';

@Component({
  selector: 'app-root',
  imports: [PlayerCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dream-team-builder');

  name:string = 'Angular';

  bellingham:Player = { name: 'Jude Belligham',position: 'CAM',team: 'Real Madrid', Nationality: 'England', Rating: 94, Goals: 24,  Assists: 17 };
}
