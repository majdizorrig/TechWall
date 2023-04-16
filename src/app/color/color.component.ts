import { Component } from '@angular/core';
import {PremierService} from "../premier.service";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers:[PremierService]
})
export class ColorComponent {
color="pink";

constructor(private premierService : PremierService) {
}
changeColor(inputColor:any)
{
  console.log(inputColor.value);
  this.color=inputColor.value;
  inputColor.value="";
}
  processReq(message : any)
  {
    alert(message);

  }
  loggerMesData(){
  this.premierService.logger('test');
  }
}
