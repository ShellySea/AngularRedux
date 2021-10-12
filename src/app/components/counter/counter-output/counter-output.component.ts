import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { CounterStateI } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  count: number;
  constructor(private _store: Store<{ counterStore: CounterStateI }>) { }

  ngOnInit() {
    this._store.select(getCounter).subscribe(data => {
      console.log('Count Observable called');
      this.count = data;
    })
  }

}

