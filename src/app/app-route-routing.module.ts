import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivatorGuard } from './events/event-route-activator.guard';
import { EventsListComponent } from './events/events-list.component';
import { EventListResolverService } from './shared/services/event-list-resolver.service';

const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent , canDeactivate:[EventRouteActivatorGuard]},
  {path: 'events', component: EventsListComponent , resolve:{events:EventListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivatorGuard]},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteRoutingModule { }
