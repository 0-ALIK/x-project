import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormaPago, Pago, Pedido, PedidoEstado } from '../interfaces/pedido.interface';

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

    public agregarPedido(data: any): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer '+token);

        return this.http.post<any>(this.host+'/api/admin/pedidos/agregar', data, {headers});
    }

    public borrarPedido(id: number): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer '+token);

        return this.http.delete(this.host+'/api/admin/pedidos/'+id, {headers});
    }

    public agregarPago(data: any, pedidoid: number): Observable<Pago> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer '+token);
        return this.http.post<Pago>(this.host+'/api/admin/pagos/'+pedidoid, data, {headers});
    }

    public editarPago(data: any, pagoid: number): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer '+token);
        return this.http.put<any>(this.host+'/api/admin/pagos/'+pagoid, data, {headers});
    }

    public eliminarPago(pagoid: number): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer '+token);
        return this.http.delete(this.host+'/api/admin/pagos/'+pagoid, {headers});
    }

    public getFormasPago(): Observable<FormaPago[]> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer '+token);
        return this.http.get<FormaPago[]>( this.host + '/api/admin/formas_pago', {headers});
    }

    public getPedidoEstados(): Observable<PedidoEstado[]> {
        return this.http.get<PedidoEstado[]>(this.host+'/api/admin/pedidos/estados');
    }

    public cambiarEstadoPedido(estado_id: number, id_pedido: number): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer '+token);
        return this.http.put<any>(this.host+'/api/admin/pedidos/'+id_pedido+'/cambiar-estado', {estado_id}, {headers});
    }

}

