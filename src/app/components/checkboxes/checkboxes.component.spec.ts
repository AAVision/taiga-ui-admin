import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesComponent } from './checkboxes.component';

describe('CheckboxesComponent', () => {
  let component: CheckboxesComponent;
  let fixture: ComponentFixture<CheckboxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckboxesComponent]
    });
    fixture = TestBed.createComponent(CheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
