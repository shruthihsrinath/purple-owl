import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PoBlogDataService } from 'src/app/services/po-blog-data.service';
import { PoBlog } from 'src/app/domain/po-blog.model';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  poBlogData: PoBlog | undefined;
  bggButton: string = "Board Game Geek button";
  gameImageAltText: string | undefined;
  gameName: string | null | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private poBlogDataService: PoBlogDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.gameName = params.get('name');
    })
    this.poBlogDataService.getBlogData().subscribe((data: PoBlog[]) => {
      data.forEach(element => {
        if (element.gameName == this.gameName) {
          this.poBlogData = element;
          this.gameImageAltText = element.gameName + " card front";
        }
      });
    });
  }
}
