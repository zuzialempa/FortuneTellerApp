import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FortuneTeller } from '../models/fortuneTeller';
import { Observable, of } from 'rxjs';
import { FTLong } from './mock';

const api = "http://localhost:8000";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urls = {
    fortuneTellers: "/fortuneteller",
  };
  constructor(private http: HttpClient) { }

  getFortuneTellers(): Observable<FortuneTeller[]> {
    return this.http.get<FortuneTeller[]>(`${api}${this.urls.fortuneTellers}`);
  }

  getFortuneTeller(id: string): Observable<FortuneTeller> {
    return this.http.get<FortuneTeller>(`${api}${this.urls.fortuneTellers}/${id}`);
  }
}
