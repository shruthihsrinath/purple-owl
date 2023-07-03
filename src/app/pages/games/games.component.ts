import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../../services/blog-data.service';
import { Blog } from '../../domain/blog.model';

@Component({
  selector: 'po-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  blogData: Blog[] | undefined;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit(): void {
    this.blogDataService.getBlogData().subscribe((data: Blog[]) => {
      this.blogData = data;
    });
  }
}
