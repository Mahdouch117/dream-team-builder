import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersService } from '../../services/player-service';
import { Player } from '../../player-card/interfaces/player';

@Component({
  selector: 'app-my-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-team.html',
  styleUrl: './my-team.css',
})
export class MyTeam {

  constructor(public playerService: PlayersService) {}

  get squad(): Player[] {
    return this.playerService.getSquad();
  }

  // ✅ SIMPLE POSITION (no complex logic = no errors)
  getPositionClass(position: string): string {
    const pos = (position || '').toUpperCase();

    if (pos === 'GK') return 'gk';

    if (pos === 'LB' || pos === 'DEF') return 'def-left';
    if (pos === 'CB') return 'def-center';
    if (pos === 'RB') return 'def-right';

    if (pos === 'CDM' || pos === 'MID') return 'mid-left';
    if (pos === 'CM') return 'mid-center';
    if (pos === 'CAM') return 'mid-right';

    if (pos === 'LW') return 'fwd-left';
    if (pos === 'ST' || pos === 'FWD') return 'fwd-center';
    if (pos === 'RW') return 'fwd-right';

    return 'mid-center'; // fallback
  }

  getAverageRating(): number {
    if (this.squad.length === 0) return 0;

    let total = 0;
    for (let i = 0; i < this.squad.length; i++) {
      total += this.squad[i].rating;
    }

    return Math.round(total / this.squad.length);
  }

  countByGroup(group: string): number {
    return this.squad.filter(p => {
      const pos = (p.position || '').toUpperCase();

      if (group === 'GK') return pos === 'GK';
      if (group === 'DEF') return pos === 'LB' || pos === 'CB' || pos === 'RB';
      if (group === 'MID') return pos === 'CDM' || pos === 'CM' || pos === 'CAM';
      if (group === 'FWD') return pos === 'LW' || pos === 'ST' || pos === 'RW';

      return false;
    }).length;
  }

  getHighestRatedPlayer(): Player | null {
    if (this.squad.length === 0) return null;

    let highest = this.squad[0];

    for (let i = 1; i < this.squad.length; i++) {
      if (this.squad[i].rating > highest.rating) {
        highest = this.squad[i];
      }
    }

    return highest;
  }
}
