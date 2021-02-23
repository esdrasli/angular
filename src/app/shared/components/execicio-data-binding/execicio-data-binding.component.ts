import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-execicio-data-binding',
  templateUrl: './execicio-data-binding.component.html',
  styleUrls: ['./execicio-data-binding.component.scss']
})
export class ExecicioDataBindingComponent implements OnInit {
  
  @Input() palavra: string | undefined;
  @Input() color: string | undefined;
  @Output() clicado = new EventEmitter();

  imageURL = 'https://cdn.dicionariopopular.com/imagens/y6n5bl.jpg'
  initialValue = 'Valor Inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';
  
  //exercicio contador
  @Input() currentValue = 0;
  @Output() currentValueChange = new EventEmitter();
  changedValueChange: any;

  increment = () =>{
    this.currentValue = this.currentValue - 1 + 2;
    // this.currentValue += 1;
    console.log(Number('15') || 0);
    this.currentValueChange.emit(this.currentValue);
  }
  decrement = () =>{
    this.currentValue -= 1;
    this.currentValueChange.emit(this.currentValue);
  }
  currentValueInput($event: any){
    console.log('event ', $event);
    this.currentValue = $event.target.value;
    console.log(typeof this.currentValue);
    Number(this.currentValue) || 0;
    console.log(typeof this.currentValue);
    // return parseInt(String(this.currentValue), 10);
  }
  //fim exercicio

  // palavra = 'existe sim';
  
  valorDoInput = "";

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled ', this.isDisabled);
    }, 5000);
   }

  ngOnInit(): void {
  }
  getImageURL(): string {
    return this.imageURL;
  }

  
  onClick($event: any){
    console.log('clicou! ', $event);
  }
  
  onKeyUp($event: any){
    this.valorDoInput = $event.target.value;
    console.log('clicou! ', $event);
  }
  
  passouMouse(){
    console.log('passouMouse');
  }
  
  onclickBotaoEmissor($event: any){
    console.log('DEvo emitir informações para o componente pai');
    this.clicado.emit($event); // poderia enviar qualquer coisa, como um bolean ou string
  }
}
