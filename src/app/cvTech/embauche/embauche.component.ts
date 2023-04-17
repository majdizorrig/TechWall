import { Component } from '@angular/core';
import {EmbaucheService} from "../embauche.service";
import {Personne} from "../../model/Personne";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  personnes : Personne [];
  constructor(private embaucheService : EmbaucheService) {}
  ngOnInit(){
    this.personnes = this.embaucheService.getEmbauchees();

  }

}
