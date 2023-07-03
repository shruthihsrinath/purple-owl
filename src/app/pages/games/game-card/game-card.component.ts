import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Blog } from 'src/app/domain/blog.model';

@Component({
  selector: 'po-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() poBlogData: Blog | undefined;

  gameButtonDesc: string | undefined;
  gameImageAltText: string | undefined;

  isMobile: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.gameButtonDesc = "More on " + this.poBlogData?.gameName;
    this.gameImageAltText = this.poBlogData?.gameName + " card front";

    fromEvent(window, 'resize').subscribe(() => {
      if (window.innerWidth == 375 && window.innerHeight == 812) {
        this.isMobile = true;
      }
      else {
        this.isMobile = false;
      }
    });
  }

  readMore(gameName: string | undefined) {
    if (this.isMobile) {
      this.router.navigate(['/pages/game-detail/' + gameName]);
    }
  }

}
