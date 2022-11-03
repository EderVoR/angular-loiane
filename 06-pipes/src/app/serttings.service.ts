import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerttingsService {

  constructor() { }

  getLocale(){
	return 'pt'
  }
}
