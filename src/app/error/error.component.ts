import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <h1 class='errorMessage'>
      404'd
</h1>
  `,
  styles: [   `.errorMessage {  margin-top:150px;text-align:center;font-size:200px  } `]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
