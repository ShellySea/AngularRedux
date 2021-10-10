import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterStateI } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  // @Input() counter: number;
  counterD: number;
  counterSubscription: Subscription;
  constructor(private _store: Store<{ counterStore: CounterStateI }>) { }

  ngOnInit() {
    this.counterSubscription = this._store.select('counterStore').subscribe(data => {
      this.counterD = data.count;
    })
  }

  ngOnDestroy() {
    if (this.counterSubscription) this.counterSubscription.unsubscribe();
  }

}
