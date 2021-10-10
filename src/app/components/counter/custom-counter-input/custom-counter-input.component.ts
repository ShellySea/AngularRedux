import { CounterStateI } from './../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  cvalue: number;

  constructor(private _store: Store<{ counterStore: CounterStateI }>) { }

  ngOnInit() {
  }

  onAdd() {
    this._store.dispatch(customIncrement({ cnum: this.cvalue }))
    console.log(this.cvalue);
  }

}
