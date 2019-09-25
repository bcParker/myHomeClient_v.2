import { Component, OnInit } from '@angular/core';
import { Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { AuthService } from '../auth.service';
@Component({
 selector: 'app-profile-modal',
 templateUrl: './profile-modal.component.html',
 styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {
 public user: Users;
 private data: Users;
 constructor(private userService: UsersService, private authservice: AuthService, ) { }
 ngOnInit() {
   // this.userService.getUsers().subscribe(data => this.user = data);
   this.data = this.authservice.userstuff.user;
 }
 refresh() {
   this.userService.getUsers().subscribe(data => this.user = data);
 }
 save(): void {
   console.log(this.data);
   this.authservice.updateUser(this.data)
     .subscribe(
       (data => {
         console.log(data);
         this.user = data;
         // this.refresh();
       }),
     );
 }
}