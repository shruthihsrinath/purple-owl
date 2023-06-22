import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
=======
=======
import { GamesComponent } from './games/games.component';
import { GameCardComponent } from './games/game-card/game-card.component';
import { AboutComponent } from './about/about.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { ButtonComponent } from './shared/button/button.component';
>>>>>>> 5e749b4 (created Service to read json file and updated router to route and pass data properly to all the pages)
>>>>>>> 6c4c61f (Create Service to read json file, update router to pass data properly through the pages)
import { HttpClient, HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
>>>>>>> 764c185 (Fix second-iteration pull request)
=======
>>>>>>> 7adb511 (Fix second iteration pull request)

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
