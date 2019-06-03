import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityScheduleViewComponent } from './activity-schedule-view.component';

describe('ActivityScheduleViewComponent', () => {
  let component: ActivityScheduleViewComponent;
  let fixture: ComponentFixture<ActivityScheduleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityScheduleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityScheduleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
