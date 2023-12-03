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

    //obtiene todos los productos
    public getProductos(): Observable<any[]> {
        const url = `${this.apiUrl}/api/producto`;
        return this.http.get<Producto[]>(url);
    }

    //obtiene un producto en especifico
    public getProducto(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/producto/${id}`;
        return this.http.get<Producto>(url);
    }

    //guardar producto
    public guardarProducto(formData: FormData): Observable<any> {
        const url = `${this.apiUrl}/api/producto`;
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });
        return this.http.post<Producto>(url, formData, { headers });
    }

    //actualizar producto
    public updateProducto(formData: FormData, id: number): Observable<any> {
        const url = `${this.apiUrl}/api/producto/${id}?_method=PUT`;
        const headers = new HttpHeaders({
            'Accept': 'application/json'
        });
        return this.http.post<Producto>(url, formData, { headers });
    }


    public getAllProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.apiUrl + '/productos');
    }

    public deleteProducto(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/producto/${id}`;
        return this.http.delete<Producto>(url);
    }
}
