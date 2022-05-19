import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'bmc-number-chart',
  templateUrl: './number-chart.component.html',
  styleUrls: ['./number-chart.component.sass']
})
export class NumberChartComponent {

  single!: any[];
  view: [number, number] = [700, 400];

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  constructor() {
    Object.assign(this, { single });
  }
}
