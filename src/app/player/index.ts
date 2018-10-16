import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerNewComponent } from './player-new/player-new.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerGameComponent } from './player-game/player-game.component';

export const components: any[] = [
  PlayerComponent,
  PlayerListComponent,
  PlayerNewComponent,
  PlayerStatusComponent,
  PlayerGameComponent
]

export * from './player/player.component';
export * from './player-list/player-list.component';
export * from './player-new/player-new.component';
export * from './player-status/player-status.component';
export * from './player-game/player-game.component';
