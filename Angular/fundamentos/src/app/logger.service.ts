import { Injectable } from '@angular/core';

/* Responsável por injetar os serviços nos componentes necessários */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  mensagens: string[] = [];

  logar(msg: string) {
    console.log(msg);
    this.mensagens.push(msg);
  }

  exibeTodosOsLogs() {
    console.log(this.mensagens);
  }
}
