import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato!: Contatos;
  onSpinners!: boolean; //carregador
  errorLoading!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contatosService: ContatosService,
  ) { }
  ngOnInit() {
    this.loadContato();
  }
  loadContato() {
    const idContato = this.route.snapshot.paramMap.get('id');
    console.log("idContato", idContato);
    this.contatosService.getContato(String(idContato))
      .pipe(
        take(1),
        finalize(() => { this.onSpinners = false }),
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      );
  }
  onSuccess(response: Contatos) {
    this.contato = response;
    console.log("contato depois da resposta",this.contato);
    console.log(this.contato.nome)
  }
  onError(error: any) {
    this.errorLoading = true;
    console.error(error);
  }
  goBack(){
    this.router.navigate([`contatos`])
  }
}
