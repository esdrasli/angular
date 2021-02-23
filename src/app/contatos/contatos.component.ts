import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { ContatosService } from './contatos.service';
import {Contato} from './contato.interface'
import { error } from 'protractor';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos!: Contato[];
  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;

  constructor(
    private contatosService: ContatosService,
  ) { }

  ngOnInit()  {
    this.carregarContatos();
  }

  carregarContatos(){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contatosService.getContatos()
    .pipe(
      take(1),
      finalize(()=> this.estaCarregando = false)
    )
    .subscribe(
      Response => this.onSuccess(Response),
      error => this.onError(error)
    );
  }

  onSuccess(Response: Contato[]){
    this.contatos = Response;
  }
  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }
  irParaDetalhes(){

  }
}

