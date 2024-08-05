import { Directive, ElementRef, HostBinding, inject, OnInit } from '@angular/core';

@Directive({
  selector: 'input[appSlider]',
  standalone: true,
  host: {
    '(click)': 'onClick()',
    '(mouseleave)': 'onMouseLeave()',
    '(mousemove)': 'onMouseMove()',
  }
})
export class SliderDirective{
  color = '#9000a0';
  private el = inject(ElementRef);
  
  @HostBinding('style.background') get background() { return this.color; }

  get Color() {
    return this.color;
  }

  onMouseLeave() {
    const x = ((this.el.nativeElement.value / this.el.nativeElement.max) * 100).toPrecision(5);
    this.color = `linear-gradient(90deg, #B3B3B3 ${x}%, #535353 ${x}%)`;
  }

  onMouseMove() {
    const x = ((this.el.nativeElement.value / this.el.nativeElement.max) * 100).toPrecision(5);
    this.color = `linear-gradient(90deg, #9000a0 ${x}%, #535353 ${x}%)`;
  }

  onClick() {
    const x = ((this.el.nativeElement.value / this.el.nativeElement.max) * 100).toPrecision(5);
    this.color = `linear-gradient(90deg, #9000a0 ${x}%, #535353 ${x}%)`;
  }
}
