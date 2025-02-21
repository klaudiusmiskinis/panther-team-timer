import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TimerComponent } from './timer/timer.component';
import { MatchComponent } from './match/match.component';
import { OptionsComponent } from './options/options.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'match', component: MatchComponent },
  { path: 'options', component: OptionsComponent },
  { path: '**', redirectTo: 'main-menu' }
];
