import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Producto } from 'src/app/interfaces/producto.iterface';

@Injectable()
export class DashboardService {

    public host: string = 'http://localhost:8000';

    constructor(
        private http: HttpClient
    ) {}

    public getClientes(): Observable<any> {
        const headers = new HttpHeaders().set('authorization', 'Bearer ' + '3|Ivsg8yMkmX0JDQvUH9zxEBkDa5ewauhLaYSvnh0Da2db69e7');
        return this.http.get<any>(this.host + '/api/clientes',{headers});
    }

    public getEmpresas(): Observable<any> {

        const headers = new HttpHeaders().set('authorization', 'Bearer ' + '3|Ivsg8yMkmX0JDQvUH9zxEBkDa5ewauhLaYSvnh0Da2db69e7');
        return this.http.get<any>(this.host + '/api/empresas',{headers});
    }

    public getPedidos(): Observable<Pedido[]> {

        return this.http.get<Pedido[]>(this.host + '/api/admin/pedidos');
    }

    public getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.host + '/api/producto');
    }
    
    public getClientesProvincias(): Observable<any> {
        return this.http.get<any>(this.host + '/api/clientes/{id}/direcciones');
    }

    public getProvincias(): Observable<any> {
        return this.http.get<any>(this.host + '/api/provincias');
    }
    
}
