import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FortuneTeller } from '../models/fortuneteller';
import { Observable, of } from 'rxjs';
import { FT } from './mock';
const api = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urls = {
    fortuneTellers: "/fortuneteller"
  };
  constructor(private http: HttpClient) { }

  getFortuneTellers(): Observable<FortuneTeller[]> {
    // getFortuneTellers(): Observable<FortuneTeller[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Acc-Type': 'application/json' })
    };
    // return this.http.get<FortuneTeller[]>(`${api}${this.urls.fortuneTellers}`, httpOptions);
    return of(FT);

  }
}
