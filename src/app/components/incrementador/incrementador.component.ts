import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valor: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valor.emit(100);
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valor.emit(0);
      return (this.progreso = 0);
    }

    this.progreso = this.progreso + valor;
    this.valor.emit(this.progreso);
  }

  onChange(valor: number){

    if(valor >= 100){
      this.progreso = 100;
    }else if(valor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }

    this.valor.emit(valor)
  }
}
