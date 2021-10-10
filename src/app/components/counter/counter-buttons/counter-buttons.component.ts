import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterStateI } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  // store name in appmodule: initialstate structure
  constructor(private _store: Store<{ counterStore: CounterStateI }>) { }

  ngOnInit() {
  }

  onIncrement() {
    this._store.dispatch(increment());
  }

  onDecrement() {
    this._store.dispatch(decrement());
  }

  onReset() {
    this._store.dispatch(reset());
  }

}
