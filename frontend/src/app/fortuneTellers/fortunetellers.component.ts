import { Component, OnInit } from '@angular/core';

import { FortuneTellerShort } from '../models/fortunetellerShort';
import { FortuneTellerService } from '../services/fortune-teller.service';

@Component({
  selector: 'fortune-teller',
  templateUrl: './fortunetellers.component.html',
  styleUrls: ['./fortunetellers.component.css']
})
export class FortuneTellersComponent implements OnInit {
  fortuneTellers: FortuneTellerShort[];

  constructor(private ftService: FortuneTellerService) { 
    this.fortuneTellers = [];
  }

  ngOnInit() {
    this.getFortuneTellers();
  }

  getFortuneTellers(): void {
    this.ftService.getFortuneTellers()
      .subscribe(ft =>{ 
        console.log("ft")
        console.log(ft)
        this.fortuneTellers = ft
      });
  }
}
