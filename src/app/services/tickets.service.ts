import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getReclamos(id_reclamo: number): Observable<Reclamo> {
    const url = `${this.apiUrl}/reclamo/${id_reclamo}`;
    return this.http.get<Reclamo>(url);
  }
}