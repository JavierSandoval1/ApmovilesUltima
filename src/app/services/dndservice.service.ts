import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DndserviceService {

  urlEndPoint: string = 'https://www.dnd5eapi.co/api/';


  constructor(private httpClient: HttpClient) { }

  getListadoClases(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}classes?`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete') 
      })
    })
  }
  getDetalleClases(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}classes?`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete') 
      })
    })
  }



}
