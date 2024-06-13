import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.payload),
  on(decrement, (state, action) => state - action.payload),
  on(set, (state, action) => action.payload)
);
