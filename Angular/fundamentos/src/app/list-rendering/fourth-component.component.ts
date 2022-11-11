import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent{
  celulares: Celular[] = [
    {id: 1, nome: "Galaxy Pocket", descricao: "Pequeno", situacao: true},
    {id: 2, nome: "Asus Zenfone Selfie", descricao: "Médio", situacao: true},
    {id: 3, nome: "Galaxy S9", descricao: "Médio", situacao: false}
  ]
}
