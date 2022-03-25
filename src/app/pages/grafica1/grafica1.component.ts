import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public labels2: string[] = [
    'Nissan',
    'Kia',
    'Mazda',
  ];

  public labels3: string[] = [
    'Colombia',
    'Peru',
    'Chile',
  ];


  public labels4: string[] = [
    'House',
    'University',
    'Transport',
  ];

  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [150, 50, 400] }
    ]
  };

  public data2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
      { data: [250, 150, 550] }
    ]
  };

  public data3: ChartData<'doughnut'> = {
    labels: this.labels3,
    datasets: [
      { data: [777, 100, 200] }
    ]
  };

  public data4: ChartData<'doughnut'> = {
    labels: this.labels4,
    datasets: [
      { data: [350, 450, 100] }
    ]
  };

}
