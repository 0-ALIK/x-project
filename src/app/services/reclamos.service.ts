import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.inteface';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

    private host: string = 'http://127.0.0.1:8000'

    constructor(
        private http: HttpClient
    ) {}

    public getClientes(): Observable<Usuario> {

        return this.http.get<Usuario>('/asdasd');
    }

}
