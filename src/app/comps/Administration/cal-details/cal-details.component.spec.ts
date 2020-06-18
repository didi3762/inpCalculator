import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDetailsComponent } from './cal-details.component';

describe('CalDetailsComponent', () => {
  let component: CalDetailsComponent;
  let fixture: ComponentFixture<CalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
