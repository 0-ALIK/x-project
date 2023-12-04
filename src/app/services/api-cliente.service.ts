import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {

    private urlApi = 'http://127.0.0.1:8000/api/clientes/';

    constructor(private Http: HttpClient) {}


    public getClientes( ){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+token)

        return this.Http.get(this.urlApi, {
            headers: header
        });
    }

    public getDatosCliente(idCliente:any ){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ token)

        return this.Http.get(this.urlApi+idCliente, {
            headers: header
        });
    }

    public eliminarCliente(idCliente:any ){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ token)

        return this.Http.delete(this.urlApi+idCliente, {
            headers: header
        });
    }

    public getProvincias(){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ token)


        return this.Http.get('http://127.0.0.1:8000/api/provincias/', {
            headers: header
        });

    }

    public editarDatosCliente(idCliente:number, formData:FormData): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
        .set('Authorization', `Bearer ` + token)
        .set('Type-content', 'aplication/json');


        return this.Http.post<any>('http://127.0.0.1:8000/api/clientes/' + idCliente , formData,  {headers} );
    }

}
