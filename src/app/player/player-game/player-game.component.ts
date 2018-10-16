import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-game',
  templateUrl: './player-game.component.html',
  styleUrls: ['./player-game.component.css']
})
export class PlayerGameComponent implements OnInit {

  players: Player[] = [];
  game: string = '1';

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // get the game ID from the route
    this.route.paramMap
      .subscribe( params => {
        this.game = params.get('gameId');
    });
    // get players array from the database
    this.playerService.getPlayers()
      .subscribe( players => {
        this.players = players;
    });
  }

  setStatus(player: Player, status: string) {
    // set the player's status and update in database
    player.status['game' + this.game] = status;
    this.playerService.updatePlayer(player)
      .subscribe( _player => {});
  }


}
