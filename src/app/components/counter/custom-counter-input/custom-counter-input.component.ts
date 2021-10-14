import { CounterStateI } from './../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannel, customIncrement } from '../state/counter.actions';
import { getChannelNm } from '../state/counter.selector';
import { AppState } from 'src/app/globalStore/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  cvalue: number;
  chlName: string;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select(getChannelNm).subscribe(d => {
      console.log('ChannelName Observable Called');
      this.chlName = d;
    });
  }

  onAdd() {
    this._store.dispatch(customIncrement({ cnum: this.cvalue }));
  }

  changeChannelName() {
    this._store.dispatch(changeChannel());
  }

}
