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
    public guardarProducto(producto: Producto): Observable<any> {
        const url = `${this.apiUrl}/api/producto`;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post(url, producto , { headers }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(error.error); // Devuelve el cuerpo del error
            })
        );
    }


    //actualizar producto
    public updateProducto(id: number, producto: Producto): Observable<any> {
        const url = `${this.apiUrl}/api/producto/${id}`;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.put(url, producto, { headers });
    }


    //eliminar producto
    public deleteProducto(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/producto/${id}`;
        return this.http.delete(url);
    }
}
