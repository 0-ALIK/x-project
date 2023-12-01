import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnaliticaService {

      
    constructor(private http: HttpClient) {
    }
public getPedidos(nombre:string|undefined, genero:string|undefined,pedido:string|undefined, provincia:string|undefined, producto:string|undefined): Observable<any>{
  var url = `http://127.0.0.1:8000/api/analitica/reporte/pedido?`;
  if(nombre != undefined){
    url+= `cliente=${nombre}&`;
  }
  if(genero != undefined){
    url+= `genero=${genero}&`;
  }
  if(pedido != undefined){
    url+= `estado=${pedido}&`;
  }
  if(provincia != undefined){
    url+= `provincia=${provincia}&`;
  }
  if(producto != undefined){
    url+= `producto=${producto}&`;
  }
  console.log(url);
    const respuesta = this.http.get<any>(url);
    return respuesta;
}

public getCliente(empresa:string|undefined, genero:string|undefined, provincia:string|undefined, producto: string|undefined): Observable<any>{
  var url = `http://127.0.0.1:8000/api/analitica/reporte/cliente?`;
  if(empresa != undefined){
    url+= `cliente=${empresa}&`;
  }
  if(genero != undefined){
    url+= `genero=${genero}&`;
  }
  if(provincia != undefined){
    url+= `provincia=${provincia}&`;
  }
  if(producto != undefined){
    url+= `producto=${producto}&`;
  }
  console.log(url);
    const respuesta = this.http.get<any>(url);
    return respuesta;
}

public getInventario(categoria:string|undefined, marca:string|undefined, precio_unit_max:string|undefined, precio_unit_min: string|undefined, punto_reorden: string|undefined): Observable<any>{
  var url = `http://127.0.0.1:8000/api/analitica/reporte/inventario?`;
  if(categoria != undefined){
    url+= `categoria=${categoria}&`;
  }
  if(marca != undefined){
    url+= `marca=${marca}&`;
  }
  if(precio_unit_max != undefined){
    url+= `precio_unit_max=${precio_unit_max}&`;
  }
  if(precio_unit_min != undefined){
    url+= `precio_unit_min=${precio_unit_min}&`;
  }
  if(punto_reorden != undefined){
    url+= `punto_reorden=${punto_reorden}&`;
  }
  console.log(url);
    const respuesta = this.http.get<any>(url);
    return respuesta;
}

public getReclamos(categoria:string|undefined, cliente:string|undefined, estado:string|undefined, prioridad: string|undefined): Observable<any>{
  var url = `http://127.0.0.1:8000/api/analitica/reporte/reclamo?`;
  if(categoria != undefined){
    url+= `categoria=${categoria}&`;
  }
  if(cliente != undefined){
    url+= `usuario=${cliente}&`;
  }
  if(estado != undefined){
    url+= `estado=${estado}&`;
  }
  if(prioridad != undefined){
    url+= `prioridad=${prioridad}&`;
  }
  console.log(url);
    const respuesta = this.http.get<any>(url);
    return respuesta;
}
}
//?formato=${formato} formato: string