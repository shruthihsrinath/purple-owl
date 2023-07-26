import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'po-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  noBackground: boolean = false;
  constructor(private router: Router) {
    // change the background when it route's to home
    this.router.events.pipe(filter((e: Event | NavigationEnd): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        if (e.urlAfterRedirects == '/pages/home') {
          this.noBackground = true;
        }
        else {
          this.noBackground = false;
        }
      });
  }
}
