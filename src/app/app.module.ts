import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ExercicioDataBidingComponent } from './shared/components/exercicio-data-biding/exercicio-data-biding.component';
import { ExercicioContadorComponent } from './shared/components/exercicio-contador/exercicio-contador.component';
import { ExercicioDiretivasComponent } from './shared/components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioNgclassComponent } from './shared/components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './shared/components/exercicio-pipes/exercicio-pipes.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';


registerLocaleData (localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataBidingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
