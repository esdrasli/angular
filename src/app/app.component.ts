import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pudim = 'Carro';
  title = 'Seja Bem vindo!!!';

  constructor() {}

  eventoRecebido($event: any) {
    console.log('AppComponent: Evento Recebido', $event);
  }
  onValorAtualizado(novoValor: any){
    console.log('onValorAtualizado', novoValor);
  }

}
