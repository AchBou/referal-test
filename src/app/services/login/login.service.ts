import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'https://eks.sefapool-test.gotbitgames.co';


  constructor(private http: HttpClient) { }

  login(sto: string, body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'init-token': sto
      })
    };

    return this.http.post<any>(this.baseUrl+'/auth/login', body, httpOptions)
  }

  getSTO(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/request_token')
  }

  signup(sto: string, body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'init-token': sto
      })
    };

    return this.http.post<any>(this.baseUrl+'/auth/', body, httpOptions)
  }

  logout(){
    localStorage.clear()
  }
}
