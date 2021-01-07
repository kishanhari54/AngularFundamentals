import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from '../shared/services/events.service';
import { CreateEventComponent } from './create-event/create-event.component';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivatorGuard implements CanActivate, CanDeactivate<any> {
  eventAvailable: boolean | Promise<boolean>;
  constructor(private eventService: EventsService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.eventAvailable = !!this.eventService.getEvent(next.params['id']);

    if (!this.eventAvailable) {
      this.router.navigate(['/events']);
      return false;
    }

    return true;
  }
  canDeactivate(
    component: CreateEventComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return component.isValid;
  }
}
