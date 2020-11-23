import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FortuneTellerShort } from '../models/fortunetellerShort';
import { FortuneTellerLong } from '../models/fortuneTellerLong';
import { Observable, of } from 'rxjs';
import { FT, FTLong } from './mock';

const api = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urls = {
    fortuneTellers: "/fortuneteller",
    fortuneTeller: "/fortuneteller"
  };
  constructor(private http: HttpClient) { }

  getFortuneTellers(): Observable<FortuneTellerShort[]> {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Acc-Type': 'application/json' })
    // };
    // return this.http.get<FortuneTeller[]>(`${api}${this.urls.fortuneTellers}`, httpOptions);
    return of(FT);
  }

  getFortuneTeller(id: number): Observable<FortuneTellerLong> {
    let ftTest = FTLong.find((ft: any) => ft ? ft._id === id : 0) ;
    return of(ftTest);
  }
}
