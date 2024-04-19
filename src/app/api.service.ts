import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  
  getResource(): Observable<any> {
    const headers = new HttpHeaders({
      Autorization: `Basic ${btoa('admin:temp')}` // admin e temp deveriam provir da pagina de login
    });
    return this.http.get(`${this.url}/home`, {headers: headers});
  }
}
