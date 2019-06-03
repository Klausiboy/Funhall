import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FrontpageViewComponent } from './frontpage-view/frontpage-view.component';
import { EventdetailsViewComponent } from './eventdetails-view/eventdetails-view.component';
import { ActivityScheduleViewComponent } from './activity-schedule-view/activity-schedule-view.component';
import { ActivityManagerViewComponent } from './activity-manager-view/activity-manager-view.component';

const routes: Routes = [
  {
    path : 'test',
    component : TestComponent
  },
  {
    path : '',
    component : FrontpageViewComponent
  },
  {
    path : 'event/:name',
    component : EventdetailsViewComponent
  },
  {
    path : 'activity_schedule/:event/:name',
    component : ActivityScheduleViewComponent
  },
  {
    path : 'activity_manager/:id',
    component : ActivityManagerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
