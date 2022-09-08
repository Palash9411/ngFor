import { Directive, ElementRef, HostListener, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appHighlightUser]'
})
export class HighlightUserDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter')
  onHover()
  {
    console.log(this.elementRef)
    this.renderer.setStyle(this.elementRef.nativeElement,"border","5px solid green",RendererStyleFlags2.Important)
  }
  @HostListener('mouseenter')
  onLeave()
  {
    console.log(this.elementRef)
    this.renderer.setStyle(this.elementRef.nativeElement,"color","white")
  }
}
