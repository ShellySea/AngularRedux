import { AppState } from './../../../globalStore/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  count: number;
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select(getCounter).subscribe(data => {
      console.log('Count Observable called');
      this.count = data;
    })
  }

}

