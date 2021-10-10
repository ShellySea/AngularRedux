import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  // @Output() incrementO = new EventEmitter<number>();
  // @Output() decrementO = new EventEmitter<number>();
  // @Output() resetO = new EventEmitter<number>();

  // store name in appmodule: initialstate structure
  constructor(private _store: Store<{ counterStore: { count: number } }>) { }

  ngOnInit() {
  }

  onIncrement() {
    //this.incrementO.emit();
    this._store.dispatch(increment());
  }

  onDecrement() {
    //this.decrementO.emit();
    this._store.dispatch(decrement());
  }

  onReset() {
    //this.resetO.emit();
    this._store.dispatch(reset());
  }

}
