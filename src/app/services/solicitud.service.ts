import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

    private urlApi = 'http://127.0.0.1:8000/api/solicitudes/';


    constructor(private Http: HttpClient) { }

    getSolicitudes(){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+token)

        return this.Http.get(this.urlApi, {
            headers: header
        });
    }

    public eliminarSolicitud(idSolicitud:any){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
        .set('Type-content', 'aplication/json')
        .set('authorization', 'Bearer '+ token)

        return this.Http.delete(this.urlApi+idSolicitud, {
            headers: header
        });
    }

    public aceptarSolicitud(idSolicitud:any){
        const token = localStorage.getItem('token') || '';
        let header = new HttpHeaders()
        .set('Type-content', 'aplication/json')
        .set('authorization', 'Bearer '+ token)

        return this.Http.put(this.urlApi+idSolicitud,'', {
            headers: header
        });
    }
}
