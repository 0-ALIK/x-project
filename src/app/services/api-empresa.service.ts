import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEmpresaService {

    private urlApi = 'http://127.0.0.1:8000/api/empresas/';
    private token = '1|aVp3eUr44PhTcDR1LvCYPrJ83DnmLKGE31HHLUly5a7a250d';


  constructor(private Http: HttpClient) { }

    getEmpresas(){
    let header =  new HttpHeaders()
        .set('Type-content', 'aplication/json')
        .set('authorization', 'Bearer '+ this.token)

    return this.Http.get(this.urlApi, {
        headers: header
    });
    }

    getDatosEmpresa(idCliente:any ){
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ this.token )

        return this.Http.get(this.urlApi+idCliente, {
            headers: header
        });
        }



    public getColaboradores(idEmpresa:any, nombre_empresa:any): Observable<any> {

        const headers = new HttpHeaders().set('Authorization', `Bearer `+this.token);
        return this.Http.get<any>('http://127.0.0.1:8000/api/clientes/' , {headers, params: nombre_empresa});
    }

    public eliminarEmpresa(idEmpresa:any ){
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ this.token)

        return this.Http.delete(this.urlApi+idEmpresa, {
            headers: header
        });
        }

    public editarDatosEmpresa(idEmpresa:any, nombre: any, ruc:any, telefono:any, correo:any, foto:any): Observable<any> {

        const headers = new HttpHeaders().set('Authorization', `Bearer `+this.token);

        const params = new HttpParams()
        .set('nombre', nombre)
        .set('ruc', ruc)
        .set('telefono', telefono)
        .set('correo', correo)
        .set('foto', foto);

        return this.Http.put<any>('http://127.0.0.1:8000/api/empresas/' +idEmpresa, {headers, params});
    }


}
