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



    public editarDatosEmpresa(idEmpresa:number, formData:FormData): Observable<any> {

        const headers = new HttpHeaders()
        .set('Authorization', `Bearer ` + this.token)
        .set('Type-content', 'aplication/json');


        return this.Http.post<any>('http://127.0.0.1:8000/api/empresas/' + idEmpresa , formData,  {headers} );
    }

    public agregarColaborador(idEmpresa:number, formData:FormData): Observable<any> {

        const headers = new HttpHeaders()
        .set('Authorization', `Bearer ` + this.token)
        .set('Type-content', 'aplication/json');


        return this.Http.post<any>('http://127.0.0.1:8000/api/clientes/', formData,  {headers} );
    }

    public agregarSucursal(idEmpresa:number, formData:FormData): Observable<any> {

        const headers = new HttpHeaders()
        .set('Authorization', `Bearer ` + this.token)
        .set('Type-content', 'aplication/json');


        return this.Http.post<any>('http://127.0.0.1:8000/api/sucursales/' + idEmpresa , formData,  {headers} );
    }




}
