import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { counterReducer } from './store/counter.reducer';
import { CounterEffects } from './store/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ counter: counterReducer }),
    provideEffects([CounterEffects]),
  ],
};
