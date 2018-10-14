import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './player/player/player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerNewComponent } from './player/player-new/player-new.component';
import { PlayerStatusComponent } from './player/player-status/player-status.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'players/list'
  },
  {
    path: 'players',
    component: PlayerComponent,
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: PlayerListComponent
      },
      {
        path: 'addplayer',
        pathMatch: 'full',
        component: PlayerNewComponent
      }
    ]
  },
  {
    path: 'status/game/:id',
    pathMatch: 'full',
    component: PlayerStatusComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
