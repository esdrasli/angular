import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExecicioDataBindingComponent } from './components/execicio-data-binding/execicio-data-binding.component';
import { ExercicioDiretivasComponent } from './components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioNgclassComponent } from './components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './components/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExecicioDataBindingComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExecicioDataBindingComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
  ],
})
export class SharedModule { }
