import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-biding',
  templateUrl: './exercicio-data-biding.component.html',
  styleUrls: ['./exercicio-data-biding.component.scss']
})
export class ExercicioDataBidingComponent implements OnInit {

  @Input() palavra!: string;
  @Output() clicado = new EventEmitter

  imageURL = 'https://blogs.uai.com.br/auquemia/wp-content/uploads/sites/136/2019/04/calopsita.jpg'
  initialValue = "valor inicial";
  isDisable=true;
  accessibilityText= "Um texto Qualquer";

  valorDoInput= '';

  constructor() {
    setTimeout(() =>{
    this.isDisable = false;
   }, 3000);
  }

  ngOnInit(): void {
  }
  getImageURL(){
    return this.imageURL;
  }
  clicou($event: any) {
    console.log('clicou', $event);
  }
  digitouAlgo($event: any) {
    this.valorDoInput = $event.target.value;

  } 
  onClick(){
    console.log('emititir info');
    this.clicado.emit(Event);
  }

}
