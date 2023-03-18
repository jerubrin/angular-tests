import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter = 0;

  @Output() counterEmitter = new EventEmitter<number>()

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}
