import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { VirtualTimeScheduler } from "rxjs";
import { IEvent, ISession } from "src/app/shared/services/event.model";
import { EventsService } from "../../shared/services/events.service";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode:boolean = false;
  constructor(private events: EventsService, private router: ActivatedRoute , private toastr:ToastrService,
    private eventService : EventsService) {}

  ngOnInit() {
    console.log(this.router.snapshot.paramMap.get("id"));
    this.event = this.events.getEvent(this.router.snapshot.paramMap.get("id"));
  }

  cancelled(data) {
      this.toastr.warning(data)
    this.addMode = false;
  }
  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event);
    this.toastr.success(`New Session : ${session.name} was addded`);
    this.addMode = false;

  }

}
