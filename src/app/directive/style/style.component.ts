import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
@Input()  color='white'
@Input()  bgColor = 'lightBlue'
size = '25px'
  changeSize(inputSize: any) {
    this.size=inputSize + 'px'
  }
}
