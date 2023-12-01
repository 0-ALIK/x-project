import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/interfaces/usuario.inteface';

@Injectable()
export class DashboardService {

    public host: string = 'http://localhost:8000';


    constructor(
        private http: HttpClient
    ) {}

    public getEmpresas(): Observable<Empresa[]> {

        return this.http.get<Empresa[]>(this.host + '/api/empresa');
    }
}
