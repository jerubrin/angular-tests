import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter = 0;
  public form: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['', Validators.email]
    })
  }

  @Output() counterEmitter = new EventEmitter<number>()

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}
