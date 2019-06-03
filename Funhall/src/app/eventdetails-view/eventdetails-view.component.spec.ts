import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailsViewComponent } from './eventdetails-view.component';

describe('EventdetailsViewComponent', () => {
  let component: EventdetailsViewComponent;
  let fixture: ComponentFixture<EventdetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
