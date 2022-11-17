import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-component',
  templateUrl: './lifecycle-component.component.html',
  styleUrls: ['./lifecycle-component.component.css']
})
/* OnInit - primeiro ciclo de vida que é disparado assim que o componente é renderizado*/
export class LifecycleComponentComponent implements OnInit {

  horario = new Date();
  /* ! = nega que esse valor não será nulo, pois será preenchido posteriormente */
  timer: any = null!;

  ngOnInit(): void {
    console.log('O evento OnInit disparou')
    this.timer = setInterval(() => this.horario = new Date(), 1000)
  }

}
