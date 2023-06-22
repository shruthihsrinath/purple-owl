import { Component, OnInit } from '@angular/core';
import { PoBlogDataService } from '../services/po-blog-data.service';
import { PoBlog } from '../domain/po-blog.model';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  poBlogData: PoBlog[] | undefined;

  constructor(private poBlogDataService: PoBlogDataService) { }

  ngOnInit(): void {
    this.poBlogDataService.getBlogData().subscribe((data: PoBlog[]) => {
      this.poBlogData = data;
    });
  }
}
