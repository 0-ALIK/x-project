import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    // 4|NXCuqDDdj4zCU4IlsqvTbckGJlguYrrhjpsX43EHe3b7eee9

    private host:string = "http://127.0.0.1:8000";

    public constructor(
        private http: HttpClient
    ) {}

    /** Solo para el registro de empresa */
    public registro(formData: FormData): Observable<any> {
        return this.http.post<any>(this.host+'/api/empresas', formData);
    }

    public login(correo: string, pass: string): Observable<any> {
        return this.http.post<any>(this.host+'/api/login', {
            correo,
            pass
        });
    }


}
