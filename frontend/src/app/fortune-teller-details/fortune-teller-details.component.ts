import { Component, OnInit } from '@angular/core';
import { FortuneTellerService } from '../services/fortune-teller.service';
import { FortuneTeller } from '../models/fortuneTeller';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fortune-teller-details',
  templateUrl: './fortune-teller-details.component.html',
  styleUrls: ['./fortune-teller-details.component.css']
})
export class FortuneTellerDetailsComponent implements OnInit {

  fortuneTeller: FortuneTeller;

  constructor(
    private route: ActivatedRoute,
    private ftService: FortuneTellerService
    ) { 
    this.fortuneTeller = {
      id: 0,
      name: "",
      available: false,
      descriptionShort: "",
      descriptionLong: "",
      tags: [],
      image: ""
    };
  }

  ngOnInit() {
    this.getFortuneTeller();
  }

  getFortuneTeller(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.ftService.getFortuneTeller(id)
      .subscribe(ft =>{ 
        console.log("ft")
        console.log(ft)
        this.fortuneTeller = ft
      });
  }

}
