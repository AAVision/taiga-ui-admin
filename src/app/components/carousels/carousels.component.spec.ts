import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselsComponent } from './carousels.component';

describe('CarouselComponent', () => {
  let component: CarouselsComponent;
  let fixture: ComponentFixture<CarouselsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselsComponent]
    });
    fixture = TestBed.createComponent(CarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
