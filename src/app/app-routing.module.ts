import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StocksTableTestComponent } from './stocks-table-test/stocks-table-test.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
// { path: 'weather', component: WeatherCardComponent },
// { path: 'stocks', component: StocksTableTestComponent },
{ path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
