import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-new-acounts',
  templateUrl: './new-acounts.component.html',
  styleUrls: ['./new-acounts.component.css']
})
export class NewAcountsComponent implements OnInit {
  public doughnutChartLabels: string[] = ['New Acounts Created Today', 'New Acounts Created Yesterday', 'New Acounts Created Last Week'];
  public doughnutChartData: number[] = [50, 500, 5000];
  public doughnutChartType: string = 'doughnut';

  constructor() {
    const timer = Observable.timer(0, 1000);
    timer.subscribe(t => {
      this.randomize();
    });
  }

  ngOnInit() {
  }

  public randomize(): void {
    // Only Change 3 values

    const data = [
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 500),
      Math.round(Math.random() * 5000)];
    this.doughnutChartData = data;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
