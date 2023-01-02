import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

	usuario: any = {
		nome: null,
		email: null
	}

	onSubmit(form: any){
		console.log(form.value);
	}

  constructor() { }

  ngOnInit(): void {
  }

  verificaValidade(campo: any){
	return !campo.valid && campo.touched
  }

  aplicaCssErro(campo: any){
	return {
		'is-invalid': this.verificaValidade(campo)
	}
  }

}
