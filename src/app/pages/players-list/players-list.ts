import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Player } from '../../player-card/interfaces/player';
import { PlayersService } from '../../services/player-service';
import { PlayerCard } from '../../player-card/player-card';

@Component({
  selector: 'app-players-list',
  imports: [PlayerCard],
  templateUrl: './players-list.html',
  styleUrl: './players-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersList implements OnInit {  
  squad: Player[] = [];
  constructor(private playerService: PlayersService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(x=>{
        this.squad = x;
        this.cdr.detectChanges();
    } );
  }
}