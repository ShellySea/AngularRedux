import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  inc(e) {
    this.count++;
    console.log(e)
    console.log(this.count)
  }

  dec() {
    this.count--;
  }

  res() {
    this.count = 0;
  }

}
