import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service1-component',
  templateUrl: './service1-component.component.html',
  styleUrls: ['./service1-component.component.css']
})
export class Service1ComponentComponent {

  nome = "";

  /* Injetando o serviço privado de log, não permitindo que seja inserido via HTML  */
  constructor(private logger: LoggerService) { }


  adicionarNome() {
    /* Sem injetar o serviço: */
    /* console.log(`O nome ${this.nome} foi adicionado`); */
    /* Injetando serviço: */
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }

}
