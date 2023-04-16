import {Component} from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 bgColor="red";
 show=false;
  changeColor()
  {
    this.show=!this.show;
  }
}
