import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { FortuneTellerShort } from '../models/fortunetellerShort';
import { FortuneTellerLong } from '../models/fortuneTellerLong';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class FortuneTellerService {

  constructor(private httpService: HttpService) { }

  getFortuneTellers(): Observable<FortuneTellerShort[]> {
    console.log("getFortuneTellers ")
    return this.httpService.getFortuneTellers();
  }
  
  getFortuneTeller(id: number): Observable<FortuneTellerLong> {
    console.log("getFortuneTeller ")
    return this.httpService.getFortuneTeller(id);
  }

}
