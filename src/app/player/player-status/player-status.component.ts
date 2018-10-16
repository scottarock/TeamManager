import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  game: string = "1";

  constructor() { }

  ngOnInit() {
  }

  selectGame(game) {
    this.game = game;
  }

}
