import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailComponent } from './game-detail.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: GameDetailComponent,
        pathMatch: 'full'
      }
    ])
  ]
})
export class GameDetailModule { }
