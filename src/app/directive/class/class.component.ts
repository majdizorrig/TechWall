import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  teams = [
    'est',
    'om',
    'barca',
    'milan'
  ];
  est = false
  barca = false
  milan = false
  show: any;
  changeTeam() {
    this.est=true

  }

}
