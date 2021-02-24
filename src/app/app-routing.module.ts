import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./area-logada/home/home.component').then(m => m.HomeModule), canActivate: [EstaLogadoGuard],
},{
  path: 'extrato',
  loadChildren: () => import('./area-logada/extrato/extrato.component').then(m => m.ExtratoModule), canActivate: [EstaLogadoGuard],
},{
  path: 'contatos',
  loadChildren: () => import('./contatos/contatos.module').then(m => m.ContatosModule), canActivate: [EstaLogadoGuard],
},{
  path: 'login', component: LoginComponent, canActivate: [NaoEstaLogadoGuard],
},{
  path: '', redirectTo: 'home', pathMatch: 'full',
},{
  path: '**', component: NaoEncontradoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
