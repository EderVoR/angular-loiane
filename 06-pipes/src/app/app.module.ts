import { LOCALE_ID, NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SerttingsService } from './serttings.service';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
	/*{
		provide: LOCALE_ID,
		useValue: 'pt-BR'
	}*/
	SerttingsService,
	{
		provide: LOCALE_ID,
		deps: [SerttingsService],
		useFactory: (settingsService: any) => settingsService.getLocale()
	},
	{
		provide: DEFAULT_CURRENCY_CODE,
		useValue: 'BRL',
	},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
