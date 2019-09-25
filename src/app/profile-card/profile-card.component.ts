import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { Users } from '../users';
import { AuthService } from '../auth.service';
@Component({
 selector: 'app-profile-card',
 templateUrl: './profile-card.component.html',
 styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
 // public user: Users;
 private data: Users;
 constructor(
   private userService: UsersService, private dialog: MatDialog, private authservice: AuthService,
 ) { }
 openDialog(){
   const dialogRef = this.dialog.open(ProfileModalComponent);
   dialogRef.afterClosed().subscribe(()=>this.ngOnInit());
 }
 ngOnInit() {
   // this.userService.getUsers().subscribe(data => {
   //   console.log(data)
   //   this.user = data;
   // console.log(this.authservice.userstuff.user.email);
    this.data = this.authservice.userstuff.user;
   console.log(this.data);
   }
   // console.log(this.user);
}