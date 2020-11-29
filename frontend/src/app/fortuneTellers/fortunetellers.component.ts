import { Component, OnInit } from '@angular/core';

import { FortuneTeller } from '../models/fortuneTeller';
import { FortuneTellerService } from '../services/fortune-teller.service';

@Component({
  selector: 'fortune-teller',
  templateUrl: './fortunetellers.component.html',
  styleUrls: ['./fortunetellers.component.css']
})
export class FortuneTellersComponent implements OnInit {
  fortuneTellers: FortuneTeller[];

  constructor(private ftService: FortuneTellerService) { 
    this.fortuneTellers = [];
  }

  ngOnInit() {
    this.getFortuneTellers();
  }

  getFortuneTellers(): void {
    this.ftService.getFortuneTellers()
      .subscribe(ft =>{ 
        console.log("ft - ",ft)
        this.fortuneTellers = ft
      });
  }
}
