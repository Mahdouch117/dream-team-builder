import { Injectable } from '@angular/core';
import { Player } from '../player-card/interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  
  
  private players: Player[] = [
    { id: 1, name: "Jude Bellingham", position: "CAM", team: "Real Madrid", Nationality: "England", Rating: 94, Goals: 24, Assists: 17 },
    { id: 2, name: "Vinícius Jr.", position: "LW", team: "Real Madrid", Nationality: "Brazil", Rating: 92, Goals: 20, Assists: 15 },
    { id: 3, name: "Mbappe", position: "ST", team: "Real Madrid", Nationality: "France", Rating: 96, Goals: 52, Assists: 26 },
    { id: 4, name: "Federico Valverde", position: "CDM", team: "Real Madrid", Nationality: "Uruguay", Rating: 91, Goals: 15, Assists: 13 },
    { id: 5, name: "Luka Modrić", position: "CM", team: "Real Madrid", Nationality: "Croatia", Rating: 93, Goals: 26, Assists: 30 },
  ]

  getPlayers(): Player[] {
    return this.players
  }


} 
