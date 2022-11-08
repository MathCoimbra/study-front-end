import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  name = "Matheus";
  birthDate = new Date("2001/09/29");
  imageURL = "/assets/Foto.jpg";
  today = new Date();
  years = this.birthDate.getDate() - this.today.getDate();

  showAge() {
    alert(`He is ${this.years} years old`);
  }
}
