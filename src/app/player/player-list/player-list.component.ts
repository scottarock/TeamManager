import { Component, OnInit } from '@angular/core';

import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers()
    .subscribe( players => {
      this.players = players;
    });
  }

  onDelete(player: Player) {
    this.playerService.removePlayer(player)
      .subscribe( removedPlayer => {
        this.players = this.players.filter(p => p.id !== removedPlayer.id);
    });
  }
}
