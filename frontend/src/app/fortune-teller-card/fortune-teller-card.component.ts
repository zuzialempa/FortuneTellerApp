import { Component, OnInit, Input } from '@angular/core';
import { FortuneTeller } from '../models/fortuneTeller';

@Component({
  selector: 'fortune-teller-card',
  templateUrl: './fortune-teller-card.component.html',
  styleUrls: ['./fortune-teller-card.component.css']
})
export class FortuneTellerCardComponent implements OnInit {
  
  constructor() { 
    // this.fortuneTeller = {id: 0, name:"", available: false, descriptionShort: "", tags: [], image:""};
  }
  
  @Input() fortuneTeller: FortuneTeller;

  ngOnInit(): void {

  }

  onWriteClick(): void {
    console.log("write")
  }

  onDetailsClick(): void {
    console.log("details")
  }

}
