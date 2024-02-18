import { Directive, ElementRef, HostListener, Renderer2, inject } from "@angular/core";

@Directive({
  selector: '[appRipple]',
  standalone: true,
})
export class RippleDirective {
  hostElement = inject(ElementRef).nativeElement as HTMLDivElement;
  renderer = inject(Renderer2);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.createRipple(event);
  }

  private createRipple(event: MouseEvent): void {
    const diameter = Math.max(this.hostElement.clientWidth, this.hostElement.clientHeight);
    const radius = diameter / 2;

    const rippleWrapper: HTMLSpanElement = this.renderer.createElement('div');
    rippleWrapper.classList.add('ripple-wrapper');

    this.removeExistedRipple();

    const ripple: HTMLSpanElement = this.renderer.createElement('span');
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - (this.hostElement.offsetLeft + radius)}px`;
    ripple.style.top = `${event.clientY - (this.hostElement.offsetTop + radius)}px`;
    ripple.classList.add("ripple");

    this.renderer.appendChild(rippleWrapper, ripple);
    this.renderer.appendChild(this.hostElement, rippleWrapper);
  }

  private removeExistedRipple(): void {
    const existedRipple = this.hostElement.querySelector('.ripple-wrapper');

    if (existedRipple) {
      this.renderer.removeChild(this.hostElement, existedRipple);
    }
  }
}
