import { Component, OnInit } from '@angular/core';
import { Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../users.service';
import { Users } from '../users.model';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  public user: Users;

  constructor(private userService: UsersService, ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.user = data);
  }

  refresh() {
    this.userService.getUsers().subscribe(data => this.user = data);
  }

  save(): void {
    this.userService.updateUser(this.user)
    .subscribe(
    (data => {
      this.user = data;
      this.refresh();
    }),
    );
  }
}
