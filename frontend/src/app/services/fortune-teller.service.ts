import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { FortuneTeller } from '../models/fortuneteller';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class FortuneTellerService {

  constructor(private httpService: HttpService) { }

  getFortuneTellers(): Observable<FortuneTeller[]> {
    console.log("getFortuneTellers ")
    // const ftList = this.httpService.getFortuneTellers();
    return this.httpService.getFortuneTellers();
  }

}
