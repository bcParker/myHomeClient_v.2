import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import {
  MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule, MatDividerModule, MatButtonModule, MatIconModule, 
  MatMenuModule, MatCardModule, MatGridListModule, MatFormFieldModule,
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { ClockCardComponent } from './clock-card/clock-card.component';

import { StocksService } from './stocks.service';
import { StocksTableTestComponent } from './stocks-table-test/stocks-table-test.component';
import { StockDBTestService } from './stocks-dbtest.service';
import { LoginComponent } from './login/login.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

import { UsersService } from './users.service';
import { WeatherService } from './weather.service';
import { AuthService } from './auth.service';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileCardComponent,
    WeatherCardComponent,
    ClockCardComponent,
    LoginComponent,
    DialogBoxComponent,
    ProfileModalComponent,
    StocksTableTestComponent
  ],

  imports: [
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatFormFieldModule,
  ],
  exports: [
  ],
  entryComponents: [
    DialogBoxComponent, ProfileModalComponent
  ],
  providers: [
    WeatherService, 
    UsersService, 
    StocksService,
    StockDBTestService, 
    AuthService,
    DialogBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
