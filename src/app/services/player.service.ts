import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly base: string = '/api/players';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base);
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.base, player);
  }

  removePlayer(player: Player): Observable<Player> {
    return this.http.delete<Player>(`${this.base}/${player._id}`);
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.base}/${player._id}`, player);
  }

}
