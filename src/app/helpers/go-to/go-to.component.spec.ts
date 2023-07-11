import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToComponent } from './go-to.component';

describe('GoToComponent', () => {
  let component: GoToComponent;
  let fixture: ComponentFixture<GoToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GoToComponent]
    });
    fixture = TestBed.createComponent(GoToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
