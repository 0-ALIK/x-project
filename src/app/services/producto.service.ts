import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.iterface';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { AgregarProductoComponent } from '../modules/inventario/pages/agregar-producto/agregar-producto.component';
import { productos } from '../interfaces/data';
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


    //eliminar producto
    public deleteProducto(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/producto/${id}`;
        return this.http.delete<Producto>(url);
    }
}
