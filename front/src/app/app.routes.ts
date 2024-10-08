import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AreaPixComponent } from './area-pix/area-pix.component';
import { CadastroComponent } from './cadastro-clientes/cadastro-clientes.component';
import { AreaExtratoComponent } from './area-extrato/area-extrato.component';

export const routes: Routes = [
    {path: '', component:LoginComponent},
    {path:'tela-inicial', component: TelaInicialComponent},
    {path:'area-pix', component: AreaPixComponent},
    {path: 'cadastro-clientes', component: CadastroComponent},
    {path: 'area-extrato', component: AreaExtratoComponent}
];
