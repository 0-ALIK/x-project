import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {

    private urlApi = 'http://127.0.0.1:8000/api/clientes';
    private token = '1|aVp3eUr44PhTcDR1LvCYPrJ83DnmLKGE31HHLUly5a7a250d';


  constructor(private Http: HttpClient) { }


    public getClientes( ){
    let header =  new HttpHeaders()
        .set('Type-content', 'aplication/json')
        .set('authorization', 'Bearer '+this.token )

    return this.Http.get(this.urlApi, {
        headers: header
    });
    }
}
