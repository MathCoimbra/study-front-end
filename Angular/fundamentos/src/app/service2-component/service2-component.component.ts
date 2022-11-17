import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service2-component',
  templateUrl: './service2-component.component.html',
  styleUrls: ['./service2-component.component.css']
})
export class Service2ComponentComponent {

  descricao = ""

  /* Injetando o serviço publico de log, permitindo que seja inserido via HTML */
  constructor(public logger: LoggerService) { }

  
  adicionarDescricao(){
    /* Sem injetar o serviço: */
      /* console.log(`A descricao ${this.descricao} foi adicionada`); */
    /* Injetando serviço: */
    this.logger.logar(`A descricao ${this.descricao} foi adicionada`);
  }

}
