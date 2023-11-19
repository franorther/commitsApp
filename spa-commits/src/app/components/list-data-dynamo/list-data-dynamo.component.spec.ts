import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataDynamoComponent } from './list-data-dynamo.component';

describe('ListDataDynamoComponent', () => {
  let component: ListDataDynamoComponent;
  let fixture: ComponentFixture<ListDataDynamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDataDynamoComponent]
    });
    fixture = TestBed.createComponent(ListDataDynamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
