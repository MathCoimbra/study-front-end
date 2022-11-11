import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  name = "Matheus";
  birthDate = new Date("09/29/2001");
  imageURL = "/assets/Foto.jpg";
  today = new Date();
  years = this.today.getFullYear() - this.birthDate.getFullYear();

  showAge() {
    alert(`He is ${this.years} years old`);
  }
}
