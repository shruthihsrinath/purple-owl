import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
<<<<<<< HEAD
import { filter } from 'rxjs/operators';
=======
>>>>>>> 0bbba26 (Website styling)


@Component({
  selector: 'po-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  noBackground: boolean = false;
  constructor(private router: Router) {
<<<<<<< HEAD
    // change the background when it route's to home
    this.router.events.pipe(filter((e: Event | NavigationEnd): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        if (e.urlAfterRedirects == '/pages/home') {
=======
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/pages/home') {
>>>>>>> 0bbba26 (Website styling)
          this.noBackground = true;
        }
        else {
          this.noBackground = false;
        }
<<<<<<< HEAD
      });
=======
      }
    })
>>>>>>> 0bbba26 (Website styling)
  }
}
