import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormComponent } from './data-form.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
	declarations: [
		DataFormComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
		HttpClientModule
	]
})
export class DataFormModule { }
