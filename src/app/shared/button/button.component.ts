import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'po-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() altAttribute: string | undefined;
  @Output() clickEvent = new EventEmitter<boolean>();

  constructor() { }

  buttonClicked() {
    this.clickEvent.emit(true);
  }
}
