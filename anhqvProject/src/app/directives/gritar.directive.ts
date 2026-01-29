import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGritar]'
})
export class GritarDirective {

  constructor(private elemento: ElementRef, private render: Renderer2){}
  
  @HostListener('mouseenter') onMouseEnter(){
      this.render.setStyle(this.elemento.nativeElement, 'color', 'red');
    }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.elemento.nativeElement, 'color', '');
  }
}
