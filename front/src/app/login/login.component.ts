import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}

  logar() {
    this.router.navigate(['/tela-inicial'])
  }
  cadastrar() {
    this.router.navigate(['/cadastro-clientes'])
  }
}