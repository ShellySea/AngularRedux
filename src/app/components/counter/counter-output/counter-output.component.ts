import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterStateI } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter$: Observable<{ count: number }>;
  constructor(private _store: Store<{ counterStore: CounterStateI }>) { }

  ngOnInit() {
    this.counter$ = this._store.select('counterStore');
  }

}

