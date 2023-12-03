import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEmpresaService {

    private urlApi = 'http://127.0.0.1:8000/api/empresas/';

    constructor(private Http: HttpClient) { }

    getEmpresas(){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ token)

        return this.Http.get(this.urlApi, {
            headers: header
        });
    }

    getDatosEmpresa(idCliente:any ){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ token)

        return this.Http.get(this.urlApi+idCliente, {
            headers: header
        });
    }

    public getColaboradores(idEmpresa:any, nombre_empresa:any): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer `+token);
        return this.Http.get<any>('http://127.0.0.1:8000/api/clientes/' , {headers, params: nombre_empresa});

    }

    public eliminarEmpresa(idEmpresa:any ){
        const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+ token)

        return this.Http.delete(this.urlApi+idEmpresa, {
            headers: header
        });
    }

    public editarDatosEmpresa(idEmpresa:number, formData:FormData): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
        .set('Authorization', `Bearer ` + token)
        .set('Type-content', 'aplication/json');


        return this.Http.post<any>('http://127.0.0.1:8000/api/empresas/' + idEmpresa , formData,  {headers} );
    }

    public agregarColaborador(idEmpresa:number, formData:FormData): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
        .set('Authorization', `Bearer ` + token)
        .set('Type-content', 'aplication/json');


        return this.Http.post<any>('http://127.0.0.1:8000/api/clientes/', formData,  {headers} );
    }

    public eliminarColaborador(id_colaborador:number): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
        .set('Authorization', `Bearer ` + token)
        .set('Type-content', 'aplication/json');


        return this.Http.delete<any>('http://127.0.0.1:8000/api/clientes/'+id_colaborador,  {headers} );
    }


    public agregarSucursal(idEmpresa:number, formData:FormData): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ` + token)
            .set('Type-content', 'aplication/json');

        return this.Http.post<any>('http://127.0.0.1:8000/api/sucursales/' + idEmpresa , formData,  {headers} );
    }

    public eliminarSucursal( id_sucursal:any, id_empresa:any){
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ` + token)
            .set('Type-content', 'aplication/json');
            console.log(id_empresa+ ' ' + id_sucursal)

        return this.Http.delete<any>('http://127.0.0.1:8000/api/sucursales/' + id_empresa+'/'+id_sucursal ,  {headers} );
    }

}
