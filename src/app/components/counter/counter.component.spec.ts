import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter', () => {
    component.increment();
    expect(component.counter).toBe(1);
  })

  it('should decrement counter', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  })

  it('should increment value by event emitter', () => {
    let result = 0;
    component.counterEmitter.emit();
    
    component.increment();

    expect(component.counter).toBe(1);
  })
});
