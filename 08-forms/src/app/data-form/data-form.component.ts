import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

	formulario!: FormGroup;

	@Input() mostrarErro: boolean = false;
	@Input() msgErro?: string;

	constructor(
		private formBuilder: FormBuilder,
		private http: HttpClient
	) {  }

  ngOnInit(): void {
	/*this.formulario = new FormGroup({
		nome: new FormControl(null),
		email: new FormControl(null)
	})*/

	this.formulario = this.formBuilder.group({
		nome: [null, [Validators.required]],
		email: [null, [Validators.required,Validators.email]]
	})
  }

  onSubmit(){
	//console.log(this.formulario.value);

	this.http.post('enderecoservidor/formUsuario', JSON.stringify(this.formulario.value))
			.subscribe(dados => {
				console.log(dados);
				this.formulario.reset();
			});
  }

  resetar(){
	this.formulario.reset();
  }

	verificaValidade(campo: any){
		return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
	}

	aplicaCssErro(campo: any){
		return {
			'is-invalid': this.verificaValidade(campo)
		}
	}

}
