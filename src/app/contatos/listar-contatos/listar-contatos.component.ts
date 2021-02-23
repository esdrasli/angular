import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';


@Component({
  selector: 'app-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contatos: Array<Contatos> | undefined;
  onSpinners: boolean = true; //carregador
  errorLoading: boolean = false;
  
  constructor(
    private contatosService: ContatosService,
    private router: Router,
  ) {
    console.log(contatosService);
   }

  ngOnInit(){
    this.loadContatos();
  }
  loadContatos(){
    console.log('loadContatos');
    this.onSpinners = true;
    this.errorLoading = false;

    this.contatosService
    .getContatos()
    .pipe(
      take(1),
      finalize(()=> {this.onSpinners = false}),
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error),
    )
  }
  onSuccess(response: Contatos[]){
    this.contatos = response;
  }
  onError(error: any) {
      this.errorLoading = true;
      console.error(error);
  }
  goToDetails(idContato: number){
    this.router.navigate([`contatos/${idContato}`]);
  }
}
