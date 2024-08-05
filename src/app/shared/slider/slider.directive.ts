import {
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'input[appSlider]',
  standalone: true,
  host: {
    '(mousedown)': 'onMouseDown()',
    '(mouseover)': 'onMouseOver()',
  },
})
export class SliderDirective implements OnInit, OnChanges {
  color = '#9000a0';
  @Input() value!: number;
  private el = inject(ElementRef);

  @HostBinding('style.background') get background() {
    return this.color;
  }

  get Color() {
    return this.color;
  }

  ngOnInit(): void {
    this.updateSlider(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.updateSlider(this.value);
    }
  }

  onMouseOver() {
    const x = (
      (this.el.nativeElement.value / this.el.nativeElement.max) *
      100
    ).toPrecision(5);
    this.color = `linear-gradient(90deg, #B3B3B3 ${x}%, #535353 ${x}%)`;
  }

  onMouseDown() {
    const x = (
      (this.el.nativeElement.value / this.el.nativeElement.max) *
      100
    ).toPrecision(5);
    this.color = `linear-gradient(90deg, #B3B3B3 ${x}%, #535353 ${x}%)`;
  }

  updateSlider(value: number) {
    const x = (
      (value / this.el.nativeElement.max) *
      100
    ).toPrecision(5);
    this.color = `linear-gradient(90deg, #B3B3B3 ${x}%, #535353 ${x}%)`;
  }
}
