import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogDataService } from 'src/app/services/blog-data.service';
import { Blog } from 'src/app/domain/blog.model';

@Component({
  selector: 'po-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  blogData: Blog | undefined;
  gameImageAltText: string | undefined;
  gameName: string | null | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private blogDataService: BlogDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.gameName = params.get('name');
    })
    this.blogDataService.getBlogData().subscribe((data: Blog[]) => {
      data.forEach(element => {
        if (element.gameName == this.gameName) {
          this.blogData = element;
          this.gameImageAltText = element.gameName + " card front";
        }
      });
    });
  }
}
