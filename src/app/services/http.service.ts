import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  public apiUrl: string = 'https://apk.doctor9.com/doctor/api/';

  public async postApiReq(_method: any, _payload: any) {
    console.log(`${this.apiUrl}${_method}`, _payload)
    let response: any;
    await this.http.post(`${this.apiUrl}${_method}`, _payload)
    .toPromise().then(resp => {
      response = resp;
    })
    return response
  }

  public async postEmApiReq(_method: any, _payload: any) {
    console.log(`${this.apiUrl}${_method}`, _payload)
    let response: any;
    await this.http.post(`${this.apiUrl}${_method}`, _payload)
    .toPromise().then(resp => {
      response = resp;
    })
    return response
  }

}
