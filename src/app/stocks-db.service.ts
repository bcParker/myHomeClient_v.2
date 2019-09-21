import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class StocksDbService {
  getStockURL = "http://localhost:3000/stocks/list"
  addStockURL = "http://localhost:3000/stocks/add"
  deleteStockURL = "http://localhost:3000/stocks/"
  updateStockURL = "http://localhost:3000/stocks/"
  getDbStocksURL = "http://localhost:3000/stocks/userstock"
  
  constructor(private http: HttpClient) { }

  stockDataSource = new BehaviorSubject<any>([]);
  cast = this.stockDataSource.asObservable();


  addStock(stockInput) {
    const body = {
      symbol: stockInput
    };

    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json", 
      Authorization: localStorage.getItem('token')
    });
    return (
      this.http.post(this.addStockURL, body, { headers: reqHeaders })
    );
  }

  getStocks() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('token')
    });
    return (
      this.http.get(this.getStockURL, { headers: reqHeaders })
    );
  }

  getuserStocks() {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('token')
    });
    return (this.http.get(this.getDbStocksURL, { headers: reqHeaders })
    );
  }

  updateStock(id) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('token')
    });
    return (
      this.http.put(this.updateStockURL + id, { headers: reqHeaders })
    );
  }

  deleteStock(id) {
    const reqHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('token')
    });
    return (
      this.http
        .delete(this.deleteStockURL + id, { headers: reqHeaders })
    )
  }

}
