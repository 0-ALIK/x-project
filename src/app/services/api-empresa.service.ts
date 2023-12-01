import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


}
