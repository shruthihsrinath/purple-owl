import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoBlog } from 'src/app/domain/po-blog.model';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() poBlogData: PoBlog | undefined;

  gameButtonDesc: string | undefined;
  gameImageAltText: string | undefined;

  resized: boolean | undefined = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.gameButtonDesc = "More on " + this.poBlogData?.gameName;
    this.gameImageAltText = this.poBlogData?.gameName + " card front";

    if (window.innerWidth == 375 && window.innerHeight == 812)
      this.resized = true;

  }

  readMore(gameName: string | undefined) {
    if (this.resized)
      this.router.navigate(['/games/game-detail/' + gameName]);
  }

}
