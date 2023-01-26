import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
  
 
  urlEndPoint =  'https://mindicador.cl/api/'

  constructor(private httpClient: HttpClient) { }

  

  getConversor(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}dolar`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete') 
      })
    })
  }
}
