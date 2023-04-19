import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent {
  constructor(private router : Router) {
  }

  goToCoponent(router){
    const link = [router]
    this.router.navigate(link)

}
}
