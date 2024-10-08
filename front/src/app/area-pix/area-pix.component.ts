import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-pix',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './area-pix.component.html',
  styleUrl: './area-pix.component.css'
})
export class AreaPixComponent {
  constructor(private router:Router){}
  
  voltarInicial() {
    this.router.navigate(['/tela-inicial'])
  }
  submitPix():  void{
    
  }

}
