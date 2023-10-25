import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.inteface';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

    constructor(
        private http: HttpClient
    ) {}

    public getClientes(): Observable<Usuario> {

        return this.http.get<Usuario>('/asdasd');
    }

}
