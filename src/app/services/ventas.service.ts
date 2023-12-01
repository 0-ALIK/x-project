import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

    private host: string = 'http://localhost:8000';

    public constructor(
        private http: HttpClient
    ) {}

    public getAllPedidos(): Observable<Pedido[]> {
        return this.http.get<Pedido[]>( this.host + '/api/admin/pedidos');
    }
}
