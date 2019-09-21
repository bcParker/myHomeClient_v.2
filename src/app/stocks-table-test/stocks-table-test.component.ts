import { Component, OnInit, ViewChild  } from '@angular/core';
import { StockDBTestService } from '../stock-dbtest.service';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { StocksDb } from '../stocksdb.model';
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-stocks-table-test',
  templateUrl: './stocks-table-test.component.html',
  styleUrls: ['./stocks-table-test.component.css']
})
export class StocksTableTestComponent implements OnInit {
  // dataSource = new StockDataSource(this.stockService);

  dataSource: any;

  displayedColumns : string[] = ['symbol', 'id', 'action'];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(private stockService: StockDBTestService, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.stockService.getDbStocks()
    this.stockService.cast.subscribe(data => this.dataSource=data)
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });
  
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
      }else if(result.event == 'Update'){
      }else if(result.event == 'Delete'){
      }
    });
  }
 
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.symbol == row_obj.symbol){
        value.id = row_obj.id;
      }
      return true;
    });
  }
  
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}

// export class StockDataSource extends DataSource<any> {
//   constructor(private stockService: StockDBTestService) {
//     super();
//   }
//   connect(): Observable<StocksDb[]> {
//     return this.stockService.getDbStocks();
//   }
//   disconnect() {}
// }
