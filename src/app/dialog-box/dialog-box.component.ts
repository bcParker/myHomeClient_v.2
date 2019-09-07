import { Component, Inject, Optional, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
 
export interface UsersData {
  company: string;
  symbol: string;
  latestPrice: number;
  previousClose: number;
  change: number;
}
 
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
 
  action:string;
  local_data:any;
  @Input('symbol') symbol: string = '';
  @Input('user') user: string = '';
 
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
 
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  postStock() {
    event.preventDefault();
    fetch(`http://localhost:3000/stocks/add`, {
      method: 'POST',
      body: JSON.stringify({
        symbol: this.symbol,
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => response.json())
  }
 
}