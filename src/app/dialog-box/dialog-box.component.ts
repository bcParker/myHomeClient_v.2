import { Component, Inject, Optional, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface UsersData {
  company: string;
  symbol: string;
  latestPrice: number;
  previousClose: number;
  change: number;
  userid: number;
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  action: string;
  local_data: any;
  @Input('symbol') symbol: string = '';
  @Input('user') user: number;


  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    // this.dialogRef.close({event:this.action,data:this.local_data});
    if (this.action == 'Add') {
      this.dialogRef.close({ event: 'Add', data: this.local_data });
      event.preventDefault();
      fetch(`http://localhost:3000/stocks/add`, {
        method: 'POST',
        body: JSON.stringify({
          symbol: this.local_data.symbol,
        }),

        headers: new Headers({
          'Content-Type': 'application/json',
          "Authorization": localStorage.getItem('token'),
        })

      }).then(response => response.json())

    } else if (this.action == 'Update') {
      this.dialogRef.close({ event: 'Update', data: this.local_data });
      event.preventDefault();
      fetch(`http://localhost:3000/stocks/${stockId}`, {
        method: 'PUT',
        body: JSON.stringify({
          symbol: this.local_data.symbol,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          "Authorization": localStorage.getItem('token'),
        })

      }).then(response => response.json())

    } else if (this.action == 'Delete') {
      this.dialogRef.close({ event: 'Delete', data: this.local_data });
      event.preventDefault();
      fetch(`http://localhost:3000/stocks/:id`, {
        method: 'DELETE',
        body: JSON.stringify({
          symbol: this.local_data.symbol,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          "Authorization": localStorage.getItem('token'),
        })

      }).then(response => response.json())
    }
  }

  // addStock(){
  //   this.dialogRef.close({event: 'Add',data:this.local_data});
  // }

  // removeStock(){
  //   this.dialogRef.close({event: 'Delete',data:this.local_data});
  // }


  // updateStock(){
  //   this.dialogRef.close({event: 'Update',data:this.local_data});
  // }


  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }



}