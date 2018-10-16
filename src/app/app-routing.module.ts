import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './player';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'players/list'
  },
  {
    path: 'players',
    component: fromComponents.PlayerComponent,
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: fromComponents.PlayerListComponent
      },
      {
        path: 'addplayer',
        pathMatch: 'full',
        component: fromComponents.PlayerNewComponent
      }
    ]
  },
  {
    path: 'status/game',
    component: fromComponents.PlayerStatusComponent,
    children: [
      {
        path: ':gameId',
        pathMatch: 'full',
        component: fromComponents.PlayerGameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
