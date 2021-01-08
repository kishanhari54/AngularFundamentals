import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {currentUser} from '../../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

currentUser: currentUser;

  constructor(private router:Router) { }

  loginUser(userName,password): currentUser {
    // we get the below info from server
    this.currentUser = {id:1,firstName:'Hari',lastName:'Kishan',UserName:'kishanhari54'};

    return this.currentUser;
  }
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  editProfile(firstname,lastname) {
    this.currentUser.firstName = firstname;
    this.currentUser.lastName = lastname;
  }



}
