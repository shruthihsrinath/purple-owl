import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'games/game-detail/:name', component: GameDetailComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
