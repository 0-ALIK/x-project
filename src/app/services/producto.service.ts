import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.iterface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    private apiUrl = 'http://127.0.0.1:8000';

    constructor(
        private http: HttpClient
    ) { }

    public getProducto(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/producto/${id}`;
        return this.http.get<Producto>(url);
    }

    //guardar producto


    //actualizar producto


    //eliminar producto

    public getAllProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.apiUrl + '/productos');
    }
}
