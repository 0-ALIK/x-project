import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/usuario.inteface'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
    public host: string = 'http://localhost:8000';


    constructor(
        private http: HttpClient
    ) {}

    public getEmpresas(): Observable<Empresa[]> {

        return this.http.get<Empresa[]>(this.host + '/api/empresa');
    }
}
