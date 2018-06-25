import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicText]'
})
export class BasicTextDirective {

  constructor(private elementRef1: ElementRef) { }

  ngOnInit()
  {
    this.elementRef1.nativeElement.style.color='darkblue';
  }
}
