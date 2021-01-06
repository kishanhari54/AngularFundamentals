import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;

  constructor() {}

  ngOnInit() {}

  getClass(): any {
    if (this.event && this.event.time === '8:00 am') {
      // return ["green", "bold"];
      // return "green bold"
      return { green: true, bold: true};
    }
    if (this.event && this.event.time === '9:00 am') {
     // return ["green", "bold"];
     return { green: true, bold: true};
    }
    if (this.event && this.event.time === '10:00 am') {
     // return ["red", "bold"];
     return { red: true, bold: true};
    }

    return [];
  }
  getStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      // return ["green", "bold"];
      // return "green bold"
      return { color: 'green', 'font-weight': 'bold'};
    }
    if (this.event && this.event.time === '9:00 am') {
     // return ["green", "bold"];
     return { color: 'green', 'font-weight': 'bold'};
    }
    if (this.event && this.event.time === '10:00 am') {
     // return ["red", "bold"];
     return { color: '#b2a4a4', 'font-weight': '400'};
    }

    return [];
  }
}
