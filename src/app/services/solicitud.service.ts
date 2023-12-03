import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

    private urlApi = 'http://127.0.0.1:8000/api/solicitudes/';
    private token = '1|aVp3eUr44PhTcDR1LvCYPrJ83DnmLKGE31HHLUly5a7a250d';


    constructor(private Http: HttpClient) { }

      getSolicitudes(){

      let header =  new HttpHeaders()
          .set('Type-content', 'aplication/json')
          .set('authorization', 'Bearer '+this.token)

      return this.Http.get(this.urlApi, {
          headers: header
      });
      }

      public eliminarSolicitud(idSolicitud:any){
        let header =  new HttpHeaders()
        .set('Type-content', 'aplication/json')
        .set('authorization', 'Bearer '+ this.token)

    return this.Http.delete(this.urlApi+idSolicitud, {
        headers: header
    });
    }

    public aceptarSolicitud(idSolicitud:any){
        let header = new HttpHeaders()
        .set('Type-content', 'aplication/json')
        .set('authorization', 'Bearer '+ this.token)

        return this.Http.put(this.urlApi+idSolicitud,'', {
            headers: header
        });
    }
  }
