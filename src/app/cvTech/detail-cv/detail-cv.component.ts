import {Component, Input} from '@angular/core';
import {Personne} from "../../model/Personne";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
 @Input() personne : Personne;

}
