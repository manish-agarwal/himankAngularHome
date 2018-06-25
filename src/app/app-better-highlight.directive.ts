import { 
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
  Renderer
 } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appAppBetterHighlight]'
})
export class AppBetterHighlightDirective implements OnInit{
  @Input() defaultColor:string='transparent';
  @Input('appAppBetterHighlight') highlightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string; 

  constructor(private elRef:ElementRef, private renderer:Renderer) { }

  ngOnInit() {
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor=this.defaultColor;
  }
}
