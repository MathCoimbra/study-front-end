import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalized-component',
  templateUrl: './personalized-component.component.html',
  styleUrls: ['./personalized-component.component.css']
})
export class PersonalizedComponentComponent {

  @Input() nome = '';
  @Input() sobrenome = '';
}
