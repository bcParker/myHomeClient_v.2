import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { StocksCardComponent } from './stocks-card/stocks-card.component';
import { TimeCardComponent } from './time-card/time-card.component';
import { CalendarCardComponent } from './calendar-card/calendar-card.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileCardComponent,
    WeatherCardComponent,
    StocksCardComponent,
    TimeCardComponent,
    CalendarCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
