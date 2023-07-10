import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarsComponent } from './scrollbars.component';

describe('ScrollbarsComponent', () => {
  let component: ScrollbarsComponent;
  let fixture: ComponentFixture<ScrollbarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScrollbarsComponent]
    });
    fixture = TestBed.createComponent(ScrollbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
