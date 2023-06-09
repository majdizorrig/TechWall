import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from "../../model/Personne";

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
@Input() personne:Personne;
@Output() selectedPersonne = new EventEmitter();
  selectPersonne() {
    this.selectedPersonne.emit(this.personne);

  }
}
