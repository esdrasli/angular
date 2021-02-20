import { Component} from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {


  filme = [{
    título: "Harry Potter - A Pedra Filosofal",
    estrelas: "4.6655445",
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 5, 30),
  }];

}
