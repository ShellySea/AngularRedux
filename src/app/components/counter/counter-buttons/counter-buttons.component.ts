import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/globalStore/app.state';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private _store: Store<AppState>) { }

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
