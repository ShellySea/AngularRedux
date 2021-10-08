import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  @Output() incrementO = new EventEmitter<number>();
  @Output() decrementO = new EventEmitter<number>();
  @Output() resetO = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onIncrement() {
    this.incrementO.emit();
  }

  onDecrement() {
    this.decrementO.emit();
  }

  onReset() {
    this.resetO.emit();
  }

}
