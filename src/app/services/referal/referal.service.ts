import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReferalService {

  constructor(private http: HttpClient) { }

  login(sto: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'init-token': sto
      })
    };
    console.log(httpOptions)
    return this.http.post<any>('/auth/login', {
      "user_id": "{{user-id}}",
      "access_token": "{{access-token}}"
    }, httpOptions)

  }

}
