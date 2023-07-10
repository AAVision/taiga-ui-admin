import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TablesComponent]
    });
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
