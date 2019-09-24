import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { StocksDb } from './stocksdb.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
@Injectable({
  providedIn: 'root'
})
export class StockDBTestService {

  constructor(private http: HttpClient) { }
  public stockBehavior = new BehaviorSubject<StocksDb[]>([])
  cast = this.stockBehavior.asObservable()
  //GET A SIGNED IN USERS STOCKS FROM PERSONAL DATABASE
  getDbStocks() {
    const getDbStocksURL = `http://localhost:3000/stocks/userstock`
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    });
    this.http.get<StocksDb[]>(getDbStocksURL, { headers: reqHeaders })
      .subscribe(data => this.stockBehavior.next(data))
  }
  addStock(stockdata) {
    const addStockURL = "http://localhost:3000/stocks/add"
    const body = {
      symbol: stockdata
    };
    console.log(stockdata)
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    });
    return (
      this.http.post(addStockURL, body, { headers: reqHeaders })
        .subscribe(() => this.getDbStocks())
    );
  }
  // GET ALL STOCKS FROM PERSONAL DATABASE
  getStocks() {
    const getStockURL = `http://localhost:3000/stocks/list`
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    });
    return (
      this.http.get(getStockURL, { headers: reqHeaders })
    );
  }
  updateStock(id, updatedSymbol) {
    const updateStockURL = `http://localhost:3000/stocks/${id}`
    const body = {
      symbol: updatedSymbol
    };
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    });
    return (
      this.http.put(updateStockURL, body, { headers: reqHeaders })
        .subscribe(() => this.getDbStocks())
    );
  }
  deleteStock(id) {
    console.log(id)
    const deleteStockURL = `http://localhost:3000/stocks/${id}`
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    });
    return (
      this.http
        .delete(deleteStockURL, { headers: reqHeaders })
        .subscribe(() => this.getDbStocks())
    )
  }
}