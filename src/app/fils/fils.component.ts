import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PremierService} from "../premier.service";


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input() filsProperty:any;
  @Output() sendRequestToData = new EventEmitter();

constructor(private ps : PremierService) {
}

sendReq()
{
  this.sendRequestToData.emit(
    "Please daddy i need some money"
  )

}
logmesData(){
  this.ps.logger('test from fils');
}
}
