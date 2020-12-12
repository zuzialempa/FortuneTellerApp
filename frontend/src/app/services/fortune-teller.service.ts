import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { FortuneTeller } from '../models/fortuneTeller';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class FortuneTellerService {

  constructor(private httpService: HttpService) { }

  getFortuneTellers(): Observable<FortuneTeller[]> {
    console.log("getFortuneTellers ")
    return this.httpService.getFortuneTellers();
  }

  getFortuneTeller(id: string): Observable<FortuneTeller> {
    console.log("getFortuneTeller ")
    return this.httpService.getFortuneTeller(id);
  }
  login(login: string, password: string): Observable<any> {
    return this.httpService.login(login, password)
  }
  
  getChat(ftId: string, userId: string): Observable<any> {
    return this.httpService.getChat(ftId, userId)
  }

  getChats(ftId: string): Observable<any> {
    return this.httpService.getChats(ftId)
  }
}
