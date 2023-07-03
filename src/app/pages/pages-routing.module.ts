import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared.module';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'games',
    component: GamesComponent
  },

  {
    path: 'game-detail/:name',
    component: GameDetailComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    GamesComponent,
    GameDetailComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
    SharedModule
  ]
})
export class PagesRoutingModule { }
