import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-user-logins',
  templateUrl: './user-logins.component.html',
  styleUrls: ['./user-logins.component.css']
})
export class UserLoginsComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'User Logins'}
  ];


  constructor() {
    const timer = Observable.timer(0, 1000);
    timer.subscribe(t => {
      this.randomize();
    });
  }

  ngOnInit() {
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values

    const data = [
      Math.round(Math.random() * 10000),
      5900,
      8000,
      (Math.random() * 10000),
      5600,
      (Math.random() * 10000),
      4000];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
