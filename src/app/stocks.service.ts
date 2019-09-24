import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { SelectedStocks } from './selectedStocks.model';
import { APIURL } from '../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(
    private http: HttpClient,
  ) { }
  getLiveStocks(): Observable<SelectedStocks[]> {
    const name = ['fb']
    const iexURL: string = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&apikey=xxx&symbols=${name}`
    // const iexURL: string = `https://cloud.iexapis.com/stable/tops?token=pk_adcf19aa1218442696e130b258bc9bfb&symbols=${name.join(',')}`
    return this.http.get<SelectedStocks[]>(iexURL)
  }
}