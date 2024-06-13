import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputComponent } from './counter-output.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('CounterOutputComponent', () => {
  let component: CounterOutputComponent;
  let fixture: ComponentFixture<CounterOutputComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterOutputComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
