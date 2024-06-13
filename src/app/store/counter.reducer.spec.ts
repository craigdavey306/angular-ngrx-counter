import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectCount, selectDoubleCount } from './counter.selectors';
import { Injector } from '@angular/core';

import * as fromReducer from './counter.reducer';
import { increment } from './counter.action';

describe('CounterReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = { type: 'unknown' };

      const state = fromReducer.counterReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('increment counter', () => {
    let injector: Injector;
    let store: MockStore;

    beforeEach(() => {
      injector = Injector.create({
        providers: [provideMockStore({ initialState: { counter: 0 } })],
      });

      store = injector.get(MockStore);
    });

    afterEach(() => {
      store?.resetSelectors();
    });

    it('should have 0 as an initial state', () => {
      const { initialState } = fromReducer;

      store.select(selectDoubleCount).subscribe((count) => {
        expect(count).toEqual(initialState);
      });

      store.select(selectCount).subscribe((count) => {
        expect(count).toEqual(initialState);
      });
    });

    it('should increment the counter', () => {
      const { initialState } = fromReducer;
      const newState = 1;

      const action = increment({ payload: newState });
      const state = fromReducer.counterReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });
});
