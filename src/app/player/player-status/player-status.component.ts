import { Component, OnInit } from '@angular/core';

import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  players: Player[] = [];
  game: string = "game1";

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers()
      .subscribe( players => {
        this.players = players;
    });
  }

  selectGame(game: string) {
    this.game = game;
  }

  setStatus(player: Player, status: string) {
    player.status[this.game] = status;
    this.playerService.updatePlayer(player)
      .subscribe( _player => {});
  }

}
