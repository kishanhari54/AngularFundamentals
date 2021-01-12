import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "src/app/shared/services/event.model";
import { EventsService } from "src/app/shared/services/services";
import { restrictedWords } from "src/app/shared/validators/restrictedWords";

@Component({
  selector:'app-create-session',
  templateUrl: "./create-session.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }

      .error input {
        background-color: #e3c3c5;
      }

      .error ::-webkit-input-placeholder {
        color: #999;
      }

      .error :-moz-placeholder {
        color: #999;
      }

      .error ::-moz-placeholder {
        color: #999;
      }

      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  @Output() cancelClicked = new EventEmitter();
  @Output() sessionAdded = new EventEmitter();

constructor( private eventService: EventsService){}

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo','boo','bow']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: [],
    };
    console.log(session);

    this.sessionAdded.emit(session);
  }

  /* restrictedWords(words)
  {
    if (!words) return null;

  return function (control: FormControl): { [key: string]: any } {
    var invalidWords = words.map( e=> control.value.includes(e)?e:null ).filter(e=> e!=null)

    return invalidWords && invalidWords.length>0 ? { restrictedWords: invalidWords.join(',') } : null;
  }
} */


cancelClick() {
  //this.newSessionForm.reset;
  this.cancelClicked.emit("New Session was not added");
}

}
