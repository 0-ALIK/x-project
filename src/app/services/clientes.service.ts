import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Empresa } from 'src/app/interfaces/usuario.inteface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
    private apiUrl = 'http://127.0.0.1:8000/api';

    constructor(private http: HttpClient) {}


    getClienteById(Id: number): Observable<any> {
        const url = `${this.apiUrl}/clientes/${Id}`;
        return this.http.get<any>(url);
    }

    public getEmpresas(): Observable<Empresa[]> {

        return this.http.get<Empresa[]>(this.apiUrl + '/api/empresas');
    }
}

