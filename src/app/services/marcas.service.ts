import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    public guardarMarca(formData: FormData): Observable<any> {
        const url = `${this.apiUrl}/api/marca`;
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });
        return this.http.post(url, formData, { headers });
    }

    //actualizar marca
    public updateMarca(formData: FormData, id: number): Observable<any> {
        const url = `${this.apiUrl}/api/marca/${id}?_method=PUT`;
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        });
        return this.http.post(url, formData, { headers });
    }

    //eliminar marca
    public deleteMarca(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/marca/${id}`;
        return this.http.delete<Marca>(url);
    }
}
