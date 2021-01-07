import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AppRouteRoutingModule } from './app-route-routing.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
    }),
    AppRouteRoutingModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
