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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.gameButtonDesc = "More on " + this.poBlogData?.gameName;
    this.gameImageAltText = this.poBlogData?.gameName + " card front";
  }

  readMore(data: PoBlog | undefined) {
    this.router.navigate(['/games/game-detail/' + data?.gameName]);
  }
}
