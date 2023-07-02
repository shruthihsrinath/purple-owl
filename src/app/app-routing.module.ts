import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';
import { GameDetailComponent } from './pages/games/game-detail/game-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
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
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
