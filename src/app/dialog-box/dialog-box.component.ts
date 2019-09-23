import { Component, Inject, Optional, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StocksDb } from '../stocksdb.model';
import { StocksDbService } from '../stocks-db.service';
import { StockDBTestService } from '../stock-dbtest.service'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  action: string
  local_data: any
  dbData = {}
  // @Input('symbol') symbol: string = '';
  @Input('user') user: number

  constructor(
    private api: StockDBTestService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: StocksDb) {
    console.log(data)
    this.local_data = {...data}
    this.action = this.local_data.action
  }


  doAction() {
    if (this.action == 'Add') {
      console.log(this.local_data.symbol)
      this.dialogRef.close({ event: 'Add', data: this.local_data })
      console.log(this.local_data)
      this.api.addStock(this.local_data.symbol)

    } else if (this.action == 'Update') {
      this.dialogRef.close({ event: 'Update', data: this.local_data })
      this.api.updateStock(this.data.id, this.local_data.symbol);

    } else if (this.action == 'Delete') {
      this.dialogRef.close({ event: 'Delete', data: this.local_data })
      this.api.deleteStock(this.data.id);
      }
    }


    closeDialog() {
      this.dialogRef.close({ event: 'Cancel' })
    }

}