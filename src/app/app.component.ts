import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { init } from './store/counter.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterControlsComponent, CounterOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(init());
  }
}
