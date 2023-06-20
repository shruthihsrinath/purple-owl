import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuButton: string = "hamburger menu";
  displayMenu: boolean = false;
  constructor() { }
  menuList(clicked: boolean) {
    if (!this.displayMenu) {
      this.displayMenu = true;
    }
    else {
      this.displayMenu = false;
    }
  }
}
