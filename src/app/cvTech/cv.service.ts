import { Injectable } from '@angular/core';
import {Personne} from "../model/Personne";

@Injectable({
  providedIn: 'root'
})
export class CvService {
private personnes : Personne[];
  constructor() {

    this.personnes = [
      new Personne(1,"sellaouti" ,"aymen",36,"Aymen-Sellaouti.jpg",77777777,"Assistant Professor" ),
      new Personne(2,"zidane","zinedine",42,"zizou.jpg",22222222,"football player" )
    ]
  }
  getPersonnes() : Personne[]{
    return this.personnes;
  }
}
