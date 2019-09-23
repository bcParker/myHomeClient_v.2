import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [

    trigger('formState', [
      state('hide', style({
        opacity: 0,
        display: 'none',
      })),
      state('show', style({
        opacity: 1,
        display: 'block',
      })),
      transition('show <=> hide', animate(0))
    ])
  ]
})

export class LoginComponent {
  @Input('email') email: string = '';
  @Input('password') password: string = '';

  state = 'login';

  loginToggle() {
    this.state = this.state == 'login' ? 'signup' : 'login';
  }
  get loginState() {
    return this.state == 'login' ? 'show' : 'hide';
  }
  get signupState() {
    return this.state == 'signup' ? 'show' : 'hide';
  }

loginUserData: UserData = {email: '', password: ''};
createUserData: UserData = {email: '', password: ''};

constructor(private _router: Router, private _auth: AuthService) { }

ngOnInit() {

}

createUser() {
  this._auth.createUser(this.createUserData)
    .subscribe(
      res => {
        console.log(res),
        localStorage.setItem('token', res.sessionToken)
      },
      err => console.log(err),
    )
}

loginUser(){
  console.log(this.loginUserData);
  this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res.sessionToken)
          localStorage.setItem('token', res.sessionToken)
          this._router.navigate(['home'])
      },
      err => console.log(err)
    )
}

}

interface UserData {
  email: string;
  password: string;
} 