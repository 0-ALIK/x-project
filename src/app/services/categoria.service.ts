import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/producto.iterface';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
    private apiUrl = 'http://127.0.0.1:8000';

    constructor(
        private http: HttpClient
    ) { }

    //obtiene todas las categorias
    public getCategorias(): Observable<any[]> {
        const url = `${this.apiUrl}/api/categoria`;
        return this.http.get<Categoria[]>(url);
    }

    //guardar categoria
    public guardarCategorias(formData: FormData): Observable<any> {
        const url = `${this.apiUrl}/api/categoria/`;
        return this.http.post<Categoria>(url, formData);
    }

    //eliminar categoria
    public deleteCategoria(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/categoria/${id}`;
        return this.http.delete(url);
    }
}
