import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss']
})
export class ExercicioNgclassComponent {

  mustBeGreen = false;

  turnGreen(){
    this.mustBeGreen = !this.mustBeGreen;
  }
}
