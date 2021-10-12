import { CounterStateI } from './../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannel, customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  cvalue: number;
  chlName: string;

  constructor(private _store: Store<{ counterStore: CounterStateI }>) { }

  ngOnInit() {
    this._store.select('counterStore').subscribe(d => {
      console.log('ChannelName Observable Called');
      this.chlName = d.channelName
    });
  }

  onAdd() {
    this._store.dispatch(customIncrement({ cnum: this.cvalue }));
  }

  changeChannelName() {
    this._store.dispatch(changeChannel());
  }

}
