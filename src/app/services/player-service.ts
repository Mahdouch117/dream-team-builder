import { Injectable } from '@angular/core';
import { Player } from '../player-card/interfaces/player';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {

  private squad: Player[] = [];

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ✅ ADD PLAYER
  addToSquad(player: Player): void {
    const exists = this.squad.some(p => p.id === player.id);

    if (!exists && this.squad.length < 11) {
      this.squad.push(player);
    }
  }

  // ✅ GET SQUAD
  getSquad(): Player[] {
    return this.squad;
  }

  // ✅ REMOVE PLAYER
  removeFromSquad(playerId: number): void {
    this.squad = this.squad.filter(p => p.id !== playerId);
  }

  // ✅ GET PLAYERS FROM API
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(
      `${this.apiUrl}/player`
    );
  }

}