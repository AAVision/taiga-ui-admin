import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandsComponent } from './islands.component';

describe('IslandsComponent', () => {
  let component: IslandsComponent;
  let fixture: ComponentFixture<IslandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IslandsComponent]
    });
    fixture = TestBed.createComponent(IslandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
