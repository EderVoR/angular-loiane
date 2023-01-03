import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { disableDebugTools } from '@angular/platform-browser';

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

  constructor(private http: HttpClient) { }

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

}
