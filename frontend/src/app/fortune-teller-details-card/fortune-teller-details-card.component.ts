import { Component, OnInit, Input } from '@angular/core';
import { FortuneTeller } from '../models/fortuneTeller';

@Component({
  selector: 'fortune-teller-details-card',
  templateUrl: './fortune-teller-details-card.component.html',
  styleUrls: ['./fortune-teller-details-card.component.css']
})
export class FortuneTellerDetailsCardComponent implements OnInit {
  
  constructor() { 
    this.fortuneTeller = {id: "0", name:"", descriptionShort: "", descriptionLong: "", tags: [], image:""};
  }
  
  @Input() fortuneTeller: FortuneTeller;

  ngOnInit(): void {}

}
