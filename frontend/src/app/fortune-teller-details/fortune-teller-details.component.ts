import { Component, OnInit } from '@angular/core';
import { FortuneTellerService } from '../services/fortune-teller.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as short_uuid from 'short-uuid';
import { Chat } from '../models/chat';

@Component({
  selector: 'app-fortune-teller-details',
  templateUrl: './fortune-teller-details.component.html',
  styleUrls: ['./fortune-teller-details.component.css']
})
export class FortuneTellerDetailsComponent implements OnInit {

  chatActive = false;
  fortuneTeller = {
    id: "0",
    name: "",
    descriptionShort: "",
    descriptionLong: "",
    tags: [],
    image: ""
  };
  chat: Chat ;

  constructor(
    private cookieService: CookieService, 
    private route: ActivatedRoute,
    private ftService: FortuneTellerService
    ) {
    // constructor(private socket: Socket) {
      const ftId = this.route.snapshot.paramMap.get('id');
      const userId = this.cookieService.get(ftId); //because ftId is not initialized yet
    this.chatActive = userId !== undefined && userId !== '';
    this.chat = {
      userId:userId,
      ftId:ftId,
      messages:[]
    }
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
  activateChat() {
    const userId = short_uuid.generate();
    this.chat.userId = userId;
    this.cookieService.set(this.fortuneTeller.id, userId);
    this.chatActive = true;
    console.log("userId-set-",userId)
  }
  finnishChat() {
    console.log("finnishChat")
    this.cookieService.delete("userId");
    this.chatActive = false;
    const userId = this.cookieService.get(this.fortuneTeller.id);
    console.log("userId-del-",userId)
  }

}
