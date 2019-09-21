import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
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
export class CalendarCardComponent implements OnInit {

  state = 'signup';


  // loginToggle() {
  //   this.state = this.state == 'login' ? 'signup' : 'login';
  // }
  // get loginState() {
  //   return this.state == 'login' ? 'show' : 'hide';
  // }
  // get signupState() {
  //   return this.state == 'signup' ? 'show' : 'hide';
  // }

  loginToggle() {
    this.state = this.state == 'signup' ? 'login' : 'login';
  }
  get loginState() {
    return this.state == 'login' ? 'show' : 'hide';
  }
  get signupState() {
    return this.state == 'signup' ? 'show' : 'hide';
  }
  signupToggle() {
    this.state = this.state == 'login' ? 'signup' : 'signup';
  }


  constructor() { }

  ngOnInit() {
  }

}
