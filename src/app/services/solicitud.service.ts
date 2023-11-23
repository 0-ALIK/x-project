import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

    private urlApi = 'http://127.0.0.1:8000/api/solicitudes';


    constructor(private Http: HttpClient) { }

      getSolicitudes(){

      let header =  new HttpHeaders()
          .set('Type-content', 'aplication/json')

      return this.Http.get(this.urlApi, {
          headers: header
      });
      }
  }
