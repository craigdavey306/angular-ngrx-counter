import { createAction, props } from '@ngrx/store';

type CounterState = {
  payload: number;
};

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<CounterState>());

export const increment = createAction(
  '[Counter] Increment',
  props<CounterState>()
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<CounterState>()
);
