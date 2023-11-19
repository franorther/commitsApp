import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommitsComponent } from './list-commits.component';

describe('ListCommitsComponent', () => {
  let component: ListCommitsComponent;
  let fixture: ComponentFixture<ListCommitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCommitsComponent]
    });
    fixture = TestBed.createComponent(ListCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
