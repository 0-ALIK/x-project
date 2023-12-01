import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/producto.iterface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
    private apiUrl = 'http://127.0.0.1:8000';

    constructor(
        private http: HttpClient
    ) { }

    public getMarcas(): Observable<any[]> {
        const url = `${this.apiUrl}/api/marca`;
        return this.http.get<Marca[]>(url);
    }

    public getMarca(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/marca/${id}`;
        return this.http.get<Marca>(url);
    }

    //guardar marca


    //actualizar marca
    public updateMarca(marca: Marca, id: number): Observable<any> {
        const url = `${this.apiUrl}/api/marca/${id}`;
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        });
        return this.http.put(url, marca, { headers });
    }

    //eliminar marca
}
