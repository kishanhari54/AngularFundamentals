import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './app.component';
import {EventsListComponent,EventThumbnailComponent,EventDetailsComponent,CreateEventComponent} from './events/eventIndex';

import { NavbarComponent } from './nav/navbar.component';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';

import { AppRouteRoutingModule } from './app-route-routing.module';

import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/session-list.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    ErrorComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    ToastNoAnimationModule,
    FormsModule,ReactiveFormsModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
    }),
    AppRouteRoutingModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
