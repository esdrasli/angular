import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';
import {finalize, take} from 'rxjs/operators'

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {

  transacoes!: Transacao[];

  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;

  constructor(
    private extratoService: ExtratoService
    ) { }

  ngOnInit() {
    this.carregarExtrato();

  }

  carregarExtrato(){
    this.estaCarregando = true;

    this.extratoService.getTransacoes()
    .pipe(
      take(1),
      finalize(()=> this.estaCarregando = false)
    )
    .subscribe(
      Response => this.onSuccess(Response),
      error=> this.onError(error))
  }

  onSuccess(Response: Transacao[]) {
    this.transacoes = Response;
  }
  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }
}
