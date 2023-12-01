import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {
  private apiUrl = 'http://127.0.0.1:8000/api/sugerencia';

  constructor(private http: HttpClient) {}

  // guardarSugerencia(sugerencia: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/sugerencia`, sugerencia);
  // }

  getSugerencias(): Observable<any> {
    let header =  new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get<any>(this.apiUrl,{
      headers: header
    });
  }

  guardarSugerencia(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

}
