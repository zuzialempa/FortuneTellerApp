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
  chat: Chat;

  constructor(
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private ftService: FortuneTellerService
  ) {
    const ftId = this.route.snapshot.paramMap.get('id');
    const userId = this.cookieService.get(ftId); //because ftId is not initialized yet
    this.chatActive = userId !== undefined && userId !== '';
    this.chat = { ftId, userId, messages: [] };
  }

  ngOnInit() {
    this.getFortuneTeller();
    this.getChat();
  }

  getFortuneTeller(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.ftService.getFortuneTeller(id)
      .subscribe(ft => {
        this.fortuneTeller = ft
      });
  }

  getChat(): void {
    const ftId = this.route.snapshot.paramMap.get('id');
    const userId = this.cookieService.get(ftId); //because ftId is not initialized yet
    this.ftService.getChat(ftId, userId)
      .subscribe(chat => {
        if (chat.userId) {
          this.chat = chat
          this.chat.messages = chat.messages.map(mess => {
            if (mess.author === this.chat.userId) {
              mess.author = "ty"
            } else {
              mess.author = "on"
            }
            return mess;
          })
        } else {
          this.chat = {
            userId: userId,
            ftId: ftId,
            messages: []
          }
        }
      });
  }

  activateChat() {
    const userId = short_uuid.generate();
    this.chat.userId = userId;
    this.cookieService.set(this.fortuneTeller.id, userId);
    this.chatActive = true;
  }
  
  finnishChat() {
    console.log("finnishChat")
    this.cookieService.delete("userId");
    this.chatActive = false;
    const userId = this.cookieService.get(this.fortuneTeller.id);
  }

}
