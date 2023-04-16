import { Component } from '@angular/core';
import {Personne} from "../../model/Personne";
import {CvService} from "../cv.service";
import {PremierService} from "../../premier.service";
//import {PremierService} from "../../premier.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  personnes : Personne[];
  selectedPersonne: Personne;
  // constructor(private premierService:PremierService) {}

// constructor(private cvService : CvService) {
constructor(private premierService : PremierService) {}
  ngOnInit(){
    //this.personnes = this.cvService.getPersonnes();
    // this.personnes=[
    //   new Personne(1,"sellaouti" ,"aymen",36,"Aymen-Sellaouti.jpg",77777777,"Assistant Professor" ),
    //   new Personne(2,"zidane","zinedine",42,"zizou.jpg",22222222,"football player" ),
    //   new Personne(3,"test","test",45,"",1111111,"test" )
    //   ];
    this.premierService.addData("data from cv component");
    this.premierService.logger(this.personnes);



}

  selectPersonne(selectedPersonne:any) {
    this.selectedPersonne = selectedPersonne;

  }
}
