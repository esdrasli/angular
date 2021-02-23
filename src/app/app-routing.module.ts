import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatoComponent } from './contatos/detalhes-contato/detalhes-contato.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [{
  path:'home',
  component: HomeComponent
}, {
  path:'login',
  component: LoginComponent

}, {
  path:'contatos',
  component: ContatosComponent

}, {
  path:'contatos/:id',
  component: DetalhesContatoComponent,
},{
  path:'extrato',
  component: ExtratoComponent,
},
{
  path: '**',
  component: NaoEncontradoComponent
},
{
  path:'',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
