import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-extrato',
  standalone: true,
  imports: [],
  templateUrl: './area-extrato.component.html',
  styleUrl: './area-extrato.component.css'
})
export class AreaExtratoComponent {
  constructor(private router:Router){}
  
  voltarInicial() {
    this.router.navigate(['/tela-inicial'])
  }

}
