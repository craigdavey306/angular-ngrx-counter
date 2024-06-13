import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../store/counter.action';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ payload: 1 }));
  }

  decrement() {
    this.store.dispatch(decrement({ payload: 1 }));
  }
}
