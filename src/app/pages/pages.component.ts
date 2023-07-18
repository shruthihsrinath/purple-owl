import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
import { filter } from 'rxjs/operators';
=======
>>>>>>> 0bbba26 (Website styling)
=======
import { filter } from 'rxjs/operators';
>>>>>>> 8429c12 (Modified home page)


@Component({
  selector: 'po-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  noBackground: boolean = false;
  constructor(private router: Router) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8429c12 (Modified home page)
    // change the background when it route's to home
    this.router.events.pipe(filter((e: Event | NavigationEnd): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        if (e.urlAfterRedirects == '/pages/home') {
<<<<<<< HEAD
=======
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/pages/home') {
>>>>>>> 0bbba26 (Website styling)
=======
>>>>>>> 8429c12 (Modified home page)
          this.noBackground = true;
        }
        else {
          this.noBackground = false;
        }
<<<<<<< HEAD
<<<<<<< HEAD
      });
=======
      }
    })
>>>>>>> 0bbba26 (Website styling)
=======
      });
>>>>>>> 8429c12 (Modified home page)
  }
}
