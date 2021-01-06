import { Component, OnInit } from "@angular/core";
import { EventsService } from "../shared/services/events.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"],
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(
    private eventService: EventsService,
    private toastr: ToastrService
  ) {
    this.events = this.eventService.getEvents();
  }

  ngOnInit() {}

  handleClickEvent(data) {
    this.toastr.success(`Name is ${data}`);
  }
}
