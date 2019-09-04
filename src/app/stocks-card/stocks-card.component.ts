import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StocksService } from '../stocks.service';
import { ViewChild } from '@angular/core';
 
import { MatDialog, MatTable } from '@angular/material';
 
@Component({
  selector: 'app-stocks-card',
  templateUrl: './stocks-card.component.html',
  styleUrls: ['./stocks-card.component.css']
})

export class StocksCardComponent implements OnInit {
  public stockInfo = [];
  
    constructor(private stocksService: StocksService, breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

    ngOnInit() {
      return this.stocksService.getStocks().subscribe(data => this.stockInfo = data);
    console.log(this.stockInfo);
    }
  
  //   numColor(num): {
  //     if (num > 0) {
  //       num.style.fontColor = 'green';
  //     }
  //   }
  // }
  }