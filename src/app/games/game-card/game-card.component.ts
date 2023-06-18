import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  constructor(private router: Router) { }
  readMore() {
    this.router.navigate(['/games/game-detail']);
  }
}
