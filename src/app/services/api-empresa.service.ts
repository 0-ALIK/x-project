import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEmpresaService {

    private urlApi = 'http://127.0.0.1:8000/api/empresas';


  constructor(private Http: HttpClient) { }

    getEmpresas(){
    let header =  new HttpHeaders()
        .set('Type-content', 'aplication/json')

    return this.Http.get(this.urlApi, {
        headers: header
    });
    }
}
