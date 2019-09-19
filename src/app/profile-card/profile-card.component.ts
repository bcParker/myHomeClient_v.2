import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  public user: Users[] = [];

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.user = data);

    console.log(this.user);
}
}
