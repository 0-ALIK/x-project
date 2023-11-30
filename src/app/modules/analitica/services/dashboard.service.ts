import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {

    public host: string = 'http://localhost:8000';

    constructor(
        private http: HttpClient
    ) {}

    public getClientes(): Observable<any> {
        return this.http.get<any>(this.host + '/api/clientes');
    }


    public getClientesProvincias(): Observable<any> {
        return this.http.get<any>(this.host + '/api/clientes/{id}/direcciones');
    }



}
