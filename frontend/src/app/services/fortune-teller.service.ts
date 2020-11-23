import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { FortuneTellerShort } from '../models/fortunetellerShort';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class FortuneTellerService {

  constructor(private httpService: HttpService) { }

  getFortuneTellers(): Observable<FortuneTellerShort[]> {
    console.log("getFortuneTellers ")
    // const ftList = this.httpService.getFortuneTellers();
    return this.httpService.getFortuneTellers();
  }

}
