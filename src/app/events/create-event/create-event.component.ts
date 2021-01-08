import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/shared/services/services';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isValid = true;
  newEvent;
  constructor(private router: Router , private eventService: EventsService) { }

  ngOnInit() {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isValid = true;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.isValid = true;
    this.router.navigate(['/events']);
  }

}
