import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _mouseover:boolean = false;
  constructor(private auth:AuthService , private router:Router) { }

  ngOnInit() {
  }

  login(loginForm) {

      this.auth.loginUser(loginForm.userName,loginForm.password);
      this.router.navigate(['/events'])
    }

  cancel() {
    this.router.navigate(['/events'])
  }

}
