import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesComponent } from './badges.component';

describe('BadgesComponent', () => {
  let component: BadgesComponent;
  let fixture: ComponentFixture<BadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BadgesComponent]
    });
    fixture = TestBed.createComponent(BadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
