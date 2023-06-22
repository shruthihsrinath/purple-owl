import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  { path: '', redirectTo: 'pages', pathMatch: 'full' }

=======
  { path: 'games', component: GamesComponent },
  { path: 'games/game-detail/:name', component: GameDetailComponent },
  { path: 'about', component: AboutComponent }
>>>>>>> 5e749b4 (created Service to read json file and updated router to route and pass data properly to all the pages)
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
