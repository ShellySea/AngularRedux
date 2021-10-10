import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  // @Input() counter: number;
  counterD: number;
  constructor(private _store: Store<{ counterStore: { count: number } }>) { }

  ngOnInit() {
    this._store.select('counterStore').subscribe(data => {
      this.counterD = data.count;
    })
  }

}
