import {Component, Input} from '@angular/core';
import {Personne} from "../../model/Personne";
import {EmbaucheService} from "../embauche.service";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
 @Input() personne : Personne;

 constructor(private emabucherService : EmbaucheService) {
 }

 embaucher(){
   this.emabucherService.embaucher(this.personne);
   console.log(this.personne)
 }

}
