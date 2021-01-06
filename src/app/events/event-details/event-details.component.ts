import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {EventsService} from '../../shared/services/events.service'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event:any;
  constructor( private events:EventsService , private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.paramMap.get('id'))
    this.event = this.events.getEvent(this.router.snapshot.paramMap.get('id'))
  }

}
