import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
=======
import { GamesComponent } from './games/games.component';
import { GameCardComponent } from './games/game-card/game-card.component';
import { AboutComponent } from './about/about.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { ButtonComponent } from './shared/button/button.component';
>>>>>>> 5e749b4 (created Service to read json file and updated router to route and pass data properly to all the pages)
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
