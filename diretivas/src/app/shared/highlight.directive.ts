import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

	@HostListener('mouseenter') onMouseOver(){
		this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') onMouseLeave(){
		this.backgroundColor = this.defaultColor;
	}

	@HostBinding('style.backgroundColor') backgroundColor: string = 'white';

	@Input() defaultColor: string = 'white';
	@Input() highlightColor: string = 'red';

	constructor() { }

	ngOnInit(){
		this.backgroundColor = this.defaultColor;
	}

}
