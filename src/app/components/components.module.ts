import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule

  ],
  exports: [
    IncrementadorComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }
