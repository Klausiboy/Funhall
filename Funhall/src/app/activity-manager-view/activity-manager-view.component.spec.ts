import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagerViewComponent } from './activity-manager-view.component';

describe('ActivityManagerViewComponent', () => {
  let component: ActivityManagerViewComponent;
  let fixture: ComponentFixture<ActivityManagerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityManagerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
