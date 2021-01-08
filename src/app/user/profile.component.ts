import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
   firstName;
   lastName;
  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit() {
       this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required,Validators.pattern('[a-zA-Z].*')]);
       this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
      this.profileForm = new FormGroup(
        {firstName : this.firstName , lastName: this.lastName}
      );

  }

  updateProfile(formvalues) {

    this.auth.editProfile(formvalues.firstName , formvalues.lastName);
    this.router.navigate(['/events']);
  }
  cancel() {  this.router.navigate(['/events']); }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched

  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched

  }


}
