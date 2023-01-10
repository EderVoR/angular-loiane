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

	verificaValidade(campo: string){
		return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
	}

	aplicaCssErro(campo: string){
		return {
			'is-invalid': this.verificaValidade(campo)
		}
	}

	consultaCEP(cep?: any, form?: any){
		//Remove digitos não numericos
		cep = cep.replace(/\D/g, '');

		//Verifica se campo CEP possui valor informado
		if(cep != ""){
			var validacao = /^[0-9]{8}$/;

			if(validacao.test(cep)){
				this.resetaForm(form);
				this.http.get(`//viacep.com.br/ws/${cep}/json`)
				.subscribe((dados: any) => this.populaDadosForm(dados, form));
			}
			else{
				alert("CEP não localizado!");
				form.form.patchValue({
					endereco: {
						cep: null
					}
				})
			}
		}
		else{
			alert("CEP inválido!");
			form.form.patchValue({
				endereco: {
					cep: null
				}
			})
		}
	}

	resetaForm(formulario: any){
		formulario.form.patchValue({
			endereco: {
				rua: null,
				complemento: null,
				bairro: null,
				cidade: null,
				estado: null
			}
		});
	}

	populaDadosForm(dados: any, form: any){
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

		form.form.patchValue({
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
