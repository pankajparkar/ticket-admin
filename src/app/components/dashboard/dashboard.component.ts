import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { Color } from '@swimlane/ngx-charts'

@Component({
  selector: 'bmc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  single!: any[];
  multi!: any[];

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  customColors = [
    {
      name: 'test',
      value: '#ff0000'
    }
  ];

  constructor() {
    Object.assign(this, { single })
  }

  ngOnInit(): void {
  }

}
