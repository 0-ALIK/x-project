import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Categoria, Producto, Marca } from 'src/app/interfaces/producto.iterface';

@Injectable()
export class DashboardService {

    public host: string = 'http://localhost:8000';

    constructor(
        private http: HttpClient
    ) {}

    /*public getEmpresas(): Observable<Empresa[]> {

        return this.http.get<Empresa[]>(this.host + '/api/empresas');*/
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

    public getMarca(): Observable<Marca[]> {
        return this.http.get<Marca[]>(this.host + '/api/marca');
    }

    public getCategoria(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.host + '/api/categoria');
    }
    
    public getClientesProvincias(): Observable<any> {
        return this.http.get<any>(this.host + '/api/clientes/{id}/direcciones');
    }

    public getProvincias(): Observable<any> {
        return this.http.get<any>(this.host + '/api/provincias');
    }
    public getPago(): Observable<any> {
        return this.http.get<any>('http://127.0.0.1:8000/api/analitica/pago/')
      }
}
