import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './games/games.component';
import { GameCardComponent } from './games/game-card/game-card.component';
import { AboutComponent } from './about/about.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameCardComponent,
    GamesComponent,
    AboutComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
