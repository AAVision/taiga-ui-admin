import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsComponent } from './lists.component';

describe('ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListsComponent]
    });
    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
