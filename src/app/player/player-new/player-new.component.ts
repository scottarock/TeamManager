import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {

  player: Player = new Player();

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.player.status = {
      game1: "undecided",
      game2: "undecided",
      game3: "undecided",
    }
    this.playerService.createPlayer(this.player)
      .subscribe( player => {
        console.log('player created', player);
        this.player = new Player();
        this.router.navigateByUrl('/')
    });
  }

}
