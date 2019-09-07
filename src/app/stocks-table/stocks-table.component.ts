import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StocksService } from '../stocks.service';
 
export interface UsersData {
  company: string;
  symbol: string;
  latestPrice: number;
  previousClose: number;
  change: number;
}
 
const ELEMENT_DATA: UsersData[] = [
  {company: 'Facebook', symbol: 'FB', latestPrice: 180, previousClose: 181, change: 1},
  {company: 'Exon', symbol: 'XOM', latestPrice: 88, previousClose: 90, change: -2},
  
];
@Component({
  selector: 'app-stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.css']
})
export class StocksTableComponent implements OnInit{
  displayedColumns: string[] = ['company', 'symbol', 'latestPrice', 'previousClose', 'change', 'action'];
  stocksData = ELEMENT_DATA;
 
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  public stockInfo = [];
 
  constructor(public dialog: MatDialog, private stocksService: StocksService, breakpointObserver: BreakpointObserver) {}
 
  ngOnInit() {
    
    return this.stocksService.getStocks().subscribe(data => this.stockInfo = data);
  console.log(this.stockInfo);
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
 
  addRowData(row_obj){
    this.stocksData.push({
      company:row_obj.company,
      symbol:row_obj.symbol,
      latestPrice:row_obj.latestPrice,
      previousClose:row_obj.previousClose,
      change:row_obj.change,
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.stocksData = this.stocksData.filter((value,key)=>{
      if(value.company == row_obj.company){
        value.symbol = row_obj.symbol;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.stocksData = this.stocksData.filter((value,key)=>{
      return value.symbol != row_obj.symbol;
    });
  }
 
 
}