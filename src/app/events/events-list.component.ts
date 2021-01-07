import { Component, OnInit } from "@angular/core";
import { EventsService } from "../shared/services/events.service";
import { ToastrService } from "ngx-toastr";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"],
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(
    private eventService: EventsService,
    private toastr: ToastrService,
    private router:ActivatedRoute
  ) {
    /* this.events = this.eventService.getEvents(); */
    /* this.eventService.getEvents().subscribe(events => this.events = events); */
    this.events = this.router.snapshot.data['events'];
  }

  ngOnInit() {}

  handleClickEvent(data) {
    this.toastr.success(`Name is ${data}`);
  }
}
