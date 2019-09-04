import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StocksCardComponent } from './stocks-card/stocks-card.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'stocks', component: StocksCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
