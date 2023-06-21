import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {
  gameName: string = "Aurum";
  bggButton: string = "BoardGameGeek button";
  gameUrl: string = 'assets/aurum.png';

  gameSummary: string = `Aurum is a trick-taking game for three or four players, with two teams of two competing in the four-player
  game. After all cards for the round have been dealt, you bid on how many tricks you think you/your team will win.
  (In a four-player game, the higher of the two bids on a team becomes the team's bid.)`;

  gameDesc: string = `After years of experimentation in your shared laboratory, 
  you and your fellow alchemists have just successfully transmuted common metals into gold! Now all that's left is to perfect the formula, 
  repeating the experiments to find the perfect combination of metals that produce the purest gold. 
  During the round, you can lead with any non-gold card. On your turn, you must not play a suit that has already been played 
  (unless it is a gold card). The highest number played wins, but gold is the trump suit and always wins. 
  Whoever played the lowest non-gold card adds a gold card of the same number from the supply to their collection if it is available. 
  All gold cards played in a trick are returned to the supply.
  The round ends immediately when a player cannot play a valid base metal card and does not have a gold card to play or chooses 
  not to play a gold card. If you win more tricks than you bid, you earn your bid value as points; if you met your bid exactly, 
  you earn twice your bid value as points. Additionally, you earn points for the number of gold cards in your collection. 
  The player/team with the most points wins a gold nugget, and the first to collect two nuggets wins!`

  url: string = "https://boardgamegeek.com/boardgame/383459/aurum";
  constructor(private router: Router) { }

  visitLink(clicked: boolean) {
    if (clicked) {
      window.location.href = "https://boardgamegeek.com/boardgame/383459/aurum";
    }
  }
}
