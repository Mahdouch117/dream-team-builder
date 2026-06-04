import { Routes } from '@angular/router';
import { MyTeam } from './pages/my-team/my-team';
import { PlayersList } from './pages/players-list/players-list';

export const routes: Routes = [
    { path: '', component: PlayersList },
    { path: 'my-team', component: MyTeam }
];
