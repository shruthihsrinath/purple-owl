import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { GamesComponent } from './games.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamesComponent,
        pathMatch: 'full'
      }
    ])
  ]
})
export class GamesModule { }
