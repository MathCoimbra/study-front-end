import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /* HttpClientModule do pacote @angular/common/http - Módulo que permite as requisições HTTTP */
    HttpClientModule,
    /* RouterModule -\ módulo de rota. forRoot - significa que irá rodar assim que inicializar a aplicação, é esperado desse método um array de objetos */
    RouterModule.forRoot([
      {
        /* path - caminho da rota, adicionando vazio significa que a rota será inicializada na raiz da aplicação */
        /* redirectTo - para aonde será direcionada a página */
        /* pathMatch - "full" - utilizado quando o path é vazio */
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }
    ]),
    CourseModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
