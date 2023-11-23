import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {

    private urlApi = 'http://127.0.0.1:8000/api/clientes';


  constructor(private Http: HttpClient) { }

    getClientes(){
    let header =  new HttpHeaders()
        .set('Type-content', 'aplication/json')

    return this.Http.get(this.urlApi, {
        headers: header
    });
    }
}
