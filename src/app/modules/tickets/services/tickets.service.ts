import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

    private apiUrl = 'http://127.0.0.1:8000/api';

    constructor(private http: HttpClient) {}

    public getReclamos(): Observable<any> {
        const url = `${this.apiUrl}/reclamo`; 

        return this.http.get<any>(url);
    }

    getReclamoById(reclamo_Id: number): Observable<any> {
      const url = `${this.apiUrl}/reclamo/${reclamo_Id}`;
      return this.http.get<any>(url);
    }
}
