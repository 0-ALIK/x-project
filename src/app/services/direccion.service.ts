import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direccion } from '../interfaces/direccion.interface';



@Injectable({
  providedIn: 'root'
})
export class DireccionService {

    public host: string = 'http://localhost:8000';


    constructor(
        private http: HttpClient
    ) {}

    public getDireccion( idEmpresa:any ): Observable<Direccion[]> {
        //Necesito agregar el id a la url para conseguir las sucursales de x empresa
        return this.http.get<Direccion[]>(this.host + '/api/sucursales/'+ idEmpresa);
    }
}


