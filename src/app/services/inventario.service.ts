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
}
