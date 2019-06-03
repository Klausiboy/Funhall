import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestService} from './test/test.service';
import { FrontpageViewComponent } from './frontpage-view/frontpage-view.component';
import { EventdetailsViewComponent } from './eventdetails-view/eventdetails-view.component';
import { ActivityScheduleViewComponent } from './activity-schedule-view/activity-schedule-view.component';
import { ActivityManagerViewComponent } from './activity-manager-view/activity-manager-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FrontpageViewComponent,
    EventdetailsViewComponent,
    ActivityScheduleViewComponent,
    ActivityManagerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
