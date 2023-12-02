import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {

    private urlApi = 'http://127.0.0.1:8000/api/clientes/';
    private token = '1|aVp3eUr44PhTcDR1LvCYPrJ83DnmLKGE31HHLUly5a7a250d'; //localStorage.getItem('token')



  constructor(private Http: HttpClient) {
    console.log(this.token);
   }


    public getClientes( ){
    let header =  new HttpHeaders()
        .set('Type-content', 'aplication/json')
        .set('authorization', 'Bearer '+this.token )

    return this.Http.get(this.urlApi, {
        headers: header
    });
    }

    public getDatosCliente(idCliente:any ){
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ this.token )

        return this.Http.get(this.urlApi+idCliente, {
            headers: header
        });
        }



        public eliminarCliente(idCliente:any ){
            let header =  new HttpHeaders()
                .set('Type-content', 'aplication/json')
                .set('authorization', 'Bearer '+ this.token)

            return this.Http.delete(this.urlApi+idCliente, {
                headers: header
            });
            }

            public editarDatosCliente(idCliente:any, nombre: any, apellido:any, telefono:any, correo:any, foto:any): Observable<any> {

                const headers = new HttpHeaders().set('Authorization', `Bearer ` + this.token);

                const params = new HttpParams()
                .set('nombre', nombre)
                .set('apellido', apellido)
                .set('telefono', telefono)
                .set('correo', correo)
                .set('foto', foto);

                return this.Http.put<any>('http://127.0.0.1:8000/api/clientes/' +idCliente, {headers, params});
            }



}
