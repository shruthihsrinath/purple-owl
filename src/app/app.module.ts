import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './pages/games/games.component';
import { GameCardComponent } from './pages/games/game-card/game-card.component';
import { AboutComponent } from './pages/about/about.component';
import { GameDetailComponent } from './pages/games/game-detail/game-detail.component';
import { ButtonComponent } from './shared/button/button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameCardComponent,
    GamesComponent,
    AboutComponent,
    GameDetailComponent,
    ButtonComponent,
    HomeComponent,
    PagesComponent
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
