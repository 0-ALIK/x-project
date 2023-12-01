import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.iterface';  // Asegúrate de importar la interfaz correcta
import { Categoria, Marca } from '../interfaces/producto.iterface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

    private apiUrl = 'http://127.0.0.1:8000';

    constructor(
        private http: HttpClient
    ) {}

    public getInventario(): Observable<any[]> {
        const url = `${this.apiUrl}/api/inventario`;
        return this.http.get<Producto[]>(url);
    }
    
    // Métodos para los Productos
    public guardarProducto(producto: Producto): Observable<any> {
        const url = `${this.apiUrl}/api/productos`;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, producto, { headers });
    }

    public updateProducto(id: number, producto: Producto): Observable<any> {
        const url = `${this.apiUrl}/api/productos/${id}`;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.put(url, producto, { headers });
    }

    public deleteProducto(id: number): Observable<any> {
        const url = `${this.apiUrl}/api/productos/${id}`;
        return this.http.delete(url);
    }

    //Métodos para Marca

    public getMarcas(): Observable<Marca[]> {
        const url = `${this.apiUrl}/api/marcas`;
        return this.http.get<Marca[]>(url);
    }

    public guardarMarca(marca:Marca):Observable<any>{
        const url = `${this.apiUrl}/api/marca`;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, marca, {headers});
    }


    //Métodos para Categorias

    public getCategorias(): Observable<Categoria[]>{
        const url = `${this.apiUrl}/api/categoria`;
        return this.http.get<Marca[]>(url);
    }

}
