import { Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

ngOnInit(){
  
}

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Profile', cols: 2, rows: 1 },
  //       { title: 'Weather', cols: 1, rows: 1 },
  //       { title: 'Clock', cols: 1, rows: 1 },
  //       { title: 'Stocks', cols: 1, rows: 1 },
  //       { title: 'Calendar', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
