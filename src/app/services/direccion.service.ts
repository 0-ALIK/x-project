import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direccion } from '../interfaces/direccion.interface';
import { Empresa } from '../interfaces/usuario.inteface';



@Injectable({
  providedIn: 'root'
})
export class DireccionService {

    public host: string = 'http://127.0.0.1:8000/api/';
    private token = '1|aVp3eUr44PhTcDR1LvCYPrJ83DnmLKGE31HHLUly5a7a250d';




    constructor(
        private http: HttpClient
    ) {}

    public getDireccionEmpresa( idEmpresa:any ): Observable<Direccion[]> {

        return this.http.get<Direccion[]>(this.host +'sucursales/'+  idEmpresa);
    }

    public getDireccionCliente( idCliente:any ): Observable<Direccion[]> {

        return this.http.get<Direccion[]>(this.host +'clientes/'+  idCliente + 'direcciones');
    }

    public getDatosEmpresa( idEmpresa:any ): Observable<Empresa[]> {

        return this.http.get<Empresa[]>(this.host +'empresas/'+  idEmpresa);
    }
}


