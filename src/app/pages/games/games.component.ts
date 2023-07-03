import { Component, OnInit } from '@angular/core';
import { PoBlogDataService } from '../../services/po-blog-data.service';
import { Blog } from '../../domain/blog.model';

@Component({
  selector: 'po-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  poBlogData: Blog[] | undefined;

  constructor(private poBlogDataService: PoBlogDataService) { }

  ngOnInit(): void {
    this.poBlogDataService.getBlogData().subscribe((data: Blog[]) => {
      this.poBlogData = data;
    });
  }
}
