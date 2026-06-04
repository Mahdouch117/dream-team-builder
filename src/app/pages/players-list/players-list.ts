import { Component } from '@angular/core';
import { Player } from '../../player-card/interfaces/player';
import { PlayerService } from '../../services/player-service';
import { PlayerCard } from '../../player-card/player-card';

@Component({
  selector: 'app-players-list',
  imports: [PlayerCard],
  templateUrl: './players-list.html',
  styleUrl: './players-list.css',
})
export class PlayersList {  
  squad: Player[] = [];

  constructor(private playerService: PlayerService) {
    this.squad = playerService.getPlayers();
  }}
