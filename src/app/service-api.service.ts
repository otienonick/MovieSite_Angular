// import { Recap } from './recap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  baseUrl = 'http://127.0.0.1:8000'
  
  httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  })

  constructor(private http : HttpClient) {}

  getAllMovies():Observable<any>{
    return this.http.get(this.baseUrl + '/movies/' ,{headers:this.httpHeaders});

  };
};
