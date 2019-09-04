
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


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

constructor(private router: Router) { }

submit(event) {
  event.preventDefault();
  fetch(`http://localhost:3000/user/signin`, {
    method: 'POST',
    body: JSON.stringify({
      email: this.email,
      password: this.password
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(response => response.json())
    .then(json => {
      this.storeSession(json.loggedInUser, json.token)
      this.router.navigate(["home"]);
    })
    .catch(err => alert("Invalid credentials"))
}

storeSession({ role }, token) {
  sessionStorage.setItem('role', role)
  sessionStorage.setItem('token', token)
}
}


