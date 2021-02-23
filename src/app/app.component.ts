import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dinamicTitle = 'Titulo dinamico, passado por propertyBind';
  palavra = 'Estou no app, component';
  // contador
  initialValueCounter = 100;

  constructor(){
    setTimeout(() => {
      this.dinamicTitle = 'Seja bem-vindo! =}'
    }, 5000);
    
  }
  eventReceived($event: any){
    console.log('AppComponent: EVENTO RECEBIDO!', $event);
  }
  
  // contador
  // onUpdateValue(newValue: any){
  //   this.initialValueCounter = newValue;
  //   console.log('Recebi o valor atualizado do contador', newValue);
  //   console.log('initialValue do app.component', this.initialValueCounter);
  // }
}
