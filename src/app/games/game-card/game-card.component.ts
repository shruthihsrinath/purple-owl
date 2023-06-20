import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  gameName: string = "Aurum";
  aurumButton: string = "More on aurum";
  gameUrl: string = 'assets/aurum.png';
  gameSummary: string = `Aurum is a trick-taking game for three or four players, with two teams of two competing in the four-player
  game. After all cards for the round have been dealt, you bid on how many tricks you think you/your team will win.
  (In a four-player game, the higher of the two bids on a team becomes the team's bid.)`;
  constructor(private router: Router) { }
  readMore(clicked: boolean) {
    if (clicked) {
      this.router.navigate(['/games/game-detail']);
    }
  }
}
