import { Component } from '@angular/core';
import {PremierService} from "../premier.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers:[PremierService]
})
export class ColorComponent {
color="pink";

constructor(private premierService : PremierService,
            private router : Router,
            private activateRoute : ActivatedRoute) {
}
ngOnInit(){
this.activateRoute.params.subscribe(
  (params) => {this.color = params['default']}
)
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
  goToCv(){
  const link :any= ['cv'];
  this.router.navigate(link);
  }
}
