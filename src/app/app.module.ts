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
