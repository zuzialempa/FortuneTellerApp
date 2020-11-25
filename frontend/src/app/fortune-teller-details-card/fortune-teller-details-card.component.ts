import { Component, OnInit, Input } from '@angular/core';
import { FortuneTellerLong } from '../models/fortuneTellerLong';

@Component({
  selector: 'fortune-teller-details-card',
  templateUrl: './fortune-teller-details-card.component.html',
  styleUrls: ['./fortune-teller-details-card.component.css']
})
export class FortuneTellerDetailsCardComponent implements OnInit {
  
  constructor() { 
    this.fortuneTeller = {_id: 0, name:"", available: false, descriptionShort: "", descriptionLong: "", tags: [], image:""};
  }
  
  @Input() fortuneTeller: FortuneTellerLong;

  ngOnInit(): void {}

}
