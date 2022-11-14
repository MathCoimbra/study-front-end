import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-component',
  templateUrl: './super-component.component.html',
  styleUrls: ['./super-component.component.css']
})
export class SuperComponentComponent {
  sobrenome = 'Coimbra';

  showFullName(fullName: any){
    alert(`The full name is: ${fullName}`)
  }

}
