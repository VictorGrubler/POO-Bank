import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-investircdb',
  templateUrl: './investircdb.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./investircdb.component.css']
})
export class InvestircdbComponent {
  selectedDate: string = ''; 
  totalMeses: number = 0;
  aporteMensal: number = 0;
  jurosMensal: number = 0.009; 
  aporteTotal: number = 0;

  calcularMeses(): void {
    const inputDate = (document.getElementById('tempoAplicado') as HTMLInputElement).value;
    const inputAporte = (document.getElementById('valorAporte') as HTMLInputElement).value;

    if (inputDate && inputAporte) {
      this.aporteMensal = parseFloat(inputAporte);
      const selected = new Date(inputDate);
      const currentDate = new Date();
      
      const diferencaAnos = selected.getFullYear() - currentDate.getFullYear();
      const diferencaMeses = selected.getMonth() - currentDate.getMonth();
      
      this.totalMeses = diferencaAnos * 12 + diferencaMeses;

      if (this.totalMeses < 0) {
        this.totalMeses = 0;
      }

      this.calculateAporteComJuros();
    }
  }

  calculateAporteComJuros(): void {
    let valorAcumulado = 0;

    
    for (let i = 0; i < this.totalMeses; i++) {
      valorAcumulado += this.aporteMensal; 
      valorAcumulado += valorAcumulado * this.jurosMensal; 
    }

    this.aporteTotal = valorAcumulado;
  }
}
