import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared.module';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },

      {
        path: 'games',
        loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
      },

      {
        path: 'game-detail/:name',
        loadChildren: () => import('./game-detail/game-detail.module').then(m => m.GameDetailModule)
      },

      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [],
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
