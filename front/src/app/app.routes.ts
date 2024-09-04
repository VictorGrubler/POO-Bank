import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

export const routes: Routes = [
    {path: '', component:LoginComponent},
    {path:'tela-inicial', component: TelaInicialComponent}
];
