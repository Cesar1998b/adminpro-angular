import { Component, Input } from '@angular/core';
import { ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {

  @Input() title: string = 'Sin Titulo';

  @Input() data: ChartData<'doughnut'> | undefined;


  public doughnutChartType: ChartType = 'doughnut';

}
