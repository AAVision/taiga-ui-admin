import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickersComponent } from './colorpickers.component';

describe('ColorpickersComponent', () => {
  let component: ColorpickersComponent;
  let fixture: ComponentFixture<ColorpickersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ColorpickersComponent]
    });
    fixture = TestBed.createComponent(ColorpickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
