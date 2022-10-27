import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
			  private _referender: Renderer2
	) {
	//Pratica que deve ser evitada, indicado na documentação do angular por dar acesso direto a DOM da pagina
	//this._elementRef.nativeElement.style.backgroundColor = 'yellow';
	this._referender.setStyle(_elementRef.nativeElement, 'background-color', 'yellow');
  }

}
