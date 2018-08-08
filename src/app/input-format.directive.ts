import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }



  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }



  // @HostListener('focus') onFocus() {
  //   console.log('on Focus');
  // }

}
