import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';


@Component({
  selector: 'po-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  noBackground: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/pages/home') {
          this.noBackground = true;
        }
        else {
          this.noBackground = false;
        }
      }
    })
  }
}
