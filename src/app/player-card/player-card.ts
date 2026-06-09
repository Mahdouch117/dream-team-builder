import { Component, Input } from '@angular/core'
import { Player } from './interfaces/player'
import { PlayersService } from '../services/player-service';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard { 
  @Input() player!: Player;

   constructor(public playerService: PlayersService) {}
  toggleStats(playerId: number) {
  const statsSection = document.getElementById('stats-section' + playerId);
  const button = document.getElementById('stats-btn' + playerId);

  if (statsSection!.style.display === 'none') {
    statsSection!.style.display = 'flex';
    button!.textContent = 'Hide Stats ▲';
  } else {
    statsSection!.style.display = 'none';
    button!.textContent = 'Show Stats ▼';
  }
}

}
