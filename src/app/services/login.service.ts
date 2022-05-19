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

  login(sto: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'init_token': sto
      })
    };
    return this.http.post<any>(this.baseUrl+'/auth/login', {'login':'1','password':'1'}, httpOptions)

  }

  getSTO(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/request_token')
  }

}
