import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsComponent } from './calendars.component';

describe('CalendarsComponent', () => {
  let component: CalendarsComponent;
  let fixture: ComponentFixture<CalendarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalendarsComponent]
    });
    fixture = TestBed.createComponent(CalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
