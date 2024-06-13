import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterControlsComponent } from './counter-controls.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('CounterControlsComponent', () => {
  let component: CounterControlsComponent;
  let fixture: ComponentFixture<CounterControlsComponent>;
  let store: MockStore;
  const initialState = 0;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterControlsComponent],
      providers: [provideMockStore<{ counter: number }>({})],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const injector = Injector.create({
      providers: [provideMockStore({ initialState })],
    });

    store = injector.get(MockStore);
  });

  afterEach(() => {
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
