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
		email: new FormControl(null),
		endereco: new FormGroup({
			cep: new FormControl(null)
		})
	})*/

	this.formulario = this.formBuilder.group({
		nome: [null, [Validators.required]],
		email: [null, [Validators.required,Validators.email]],
		endereco: this.formBuilder.group({
			cep: [null, Validators.required],
			numero: [null, Validators.required],
			complemento: [null],
			rua: [null, Validators.required],
			bairro: [null, Validators.required],
			cidade: [null, Validators.required],
			estado: [null, Validators.required]
		})
	})
  }

	onSubmit(){

		if(this.formulario.valid)
		{
			this.http.post('enderecoservidor/formUsuario', JSON.stringify(this.formulario.value))
			.subscribe(dados => {
				console.log(dados);
				this.formulario.reset();
			});
		}
		else{
			console.log("Formulario invalido")
			this.verificaValidacaoForm(this.formulario);
		}
	}

	verificaValidacaoForm(formGroup: FormGroup){
		Object.keys(formGroup.controls).forEach(campo  => {
			const controle = formGroup.get(campo);
			controle?.markAsDirty();

			if(controle instanceof FormGroup){
				this.verificaValidacaoForm(controle);
			}
		})
	}

	resetar(){
		this.formulario.reset();
	}

	verificaValidade(campo: string){
		return !this.formulario.get(campo)?.valid && (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
	}

	aplicaCssErro(campo: string){
		return {
			'is-invalid': this.verificaValidade(campo)
		}
	}

	consultaCEP(){

		let cep = this.formulario.get('endereco.cep')?.value;

		//Remove digitos não numericos
		cep = cep.replace(/\D/g, '');

		//Verifica se campo CEP possui valor informado
		if(cep != ""){
			var validacao = /^[0-9]{8}$/;

			if(validacao.test(cep)){
				this.resetaForm();
				this.http.get(`//viacep.com.br/ws/${cep}/json`)
				.subscribe((dados: any) => this.populaDadosForm(dados));
			}
			else{
				alert("CEP não localizado!");
				this.formulario.patchValue({
					endereco: {
						cep: null
					}
				})
			}
		}
		else{
			alert("CEP inválido!");
			this.formulario.patchValue({
				endereco: {
					cep: null
				}
			})
		}
	}

	resetaForm(){
		this.formulario.patchValue({
			endereco: {
				rua: null,
				complemento: null,
				bairro: null,
				cidade: null,
				estado: null
			}
		});
	}

	populaDadosForm(dados: any){
		/*form.setValue({
			nome: form.value.nome,
			email: form.value.email,
			endereco: {
				cep: dados.cep,
				rua: dados.logradouro,
				numero: '',
				complemento: dados.complemento,
				bairro: dados.bairro,
				cidade: dados.localidade,
				estado: dados.uf
			}
		});*/

		this.formulario.patchValue({
			endereco: {
					rua: dados.logradouro,
					complemento: dados.complemento,
					bairro: dados.bairro,
					cidade: dados.localidade,
					estado: dados.uf
			}
		})
	}
}
