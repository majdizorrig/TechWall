import {Directive, HostBinding, HostListener} from '@angular/core';
import {style} from "@angular/animations";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') bgcolor = 'red';
  @HostListener('mouseenter') mouseenter(){
    this.bgcolor = 'yellow'
}
@HostListener('mouseleave') mouseLeave(){
    this.bgcolor = 'red'
}

}
