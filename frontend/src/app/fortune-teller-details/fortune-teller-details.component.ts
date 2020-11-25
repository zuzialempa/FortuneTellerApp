import { Component, OnInit } from '@angular/core';
import { FortuneTellerService } from '../services/fortune-teller.service';
import { FortuneTellerLong } from '../models/fortuneTellerLong';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fortune-teller-details',
  templateUrl: './fortune-teller-details.component.html',
  styleUrls: ['./fortune-teller-details.component.css']
})
export class FortuneTellerDetailsComponent implements OnInit {

  fortuneTeller: FortuneTellerLong;

  constructor(
    private route: ActivatedRoute,
    private ftService: FortuneTellerService
    ) { 
    this.fortuneTeller = {
      _id: 0,
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
    let id = +this.route.snapshot.paramMap.get('id');
    if(id === null) {
      id = 0
    }
    this.ftService.getFortuneTeller(id)
      .subscribe(ft =>{ 
        console.log("ft")
        console.log(ft)
        this.fortuneTeller = ft
      });
  }

}
