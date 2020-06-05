import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';  

@Directive({
  selector: '[appApp]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private render: Renderer2) { }

  @Input() defaultColor: string;

  @Input('appApp') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changecolor(this.highlightColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changecolor(null);
  }

  private changecolor(color: string) {
    console.log(this.highlightColor);  
    this.render.setStyle(this.el.nativeElement, 'color', color);  
  }
}