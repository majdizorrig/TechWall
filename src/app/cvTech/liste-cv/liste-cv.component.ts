import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from "../../model/Personne";

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent {
@Input() personnes:Personne[];
@Output() selectedPersonne = new EventEmitter();
  selectPersonne(selectedPersonne:Personne) {
    this.selectedPersonne.emit(
      selectedPersonne
   )



  }
}
