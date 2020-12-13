import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Chat } from '../models/chat';
import { FortuneTellerService } from '../services/fortune-teller.service';

@Component({
  selector: 'fortune-teller-dashboard',
  templateUrl: './fortune-teller-dashboard.component.html',
  styleUrls: ['./fortune-teller-dashboard.component.css']
})
export class FortuneTellerDashboardComponent implements OnInit {

  chats: Chat[];
  chatSocket: WebSocket;
  ftId: string;
  constructor(private cookieService: CookieService,
    private ftService: FortuneTellerService
  ) {
    this.chats = []
    this.ftId = this.cookieService.get("fortuneTeller")
  }


  ngOnInit(): void {
    this.getChats();
    console.log(this.chats)

    this.chatSocket = new WebSocket(`ws://localhost:8000/ws/chat/${this.ftId}/`);

    this.chatSocket.onmessage = (e) => {
      const { message } = JSON.parse(e.data);
      const item = this.chats.find(i => i.userId === message.userId);
      if (!item) {
        message.author = "klient"
        this.chats.push({
          ftId: this.ftId,
          userId: message.userId,
          messages: [message]
        })
      }
    };
  }

  getChats(): void {
    this.ftService.getChats(this.ftId).subscribe(chats => {
      if (chats.length > 0) {
        console.log("CHATS - ", chats)
        this.chats = chats.map(chat => {
          const messages = chat.messages.map(mess => {
            if (mess.author === chat.userId) {
              mess.author = "ty";
            } else {
              mess.author = "klient";
            }
            return mess;
          })
          return { ...chat, messages }
        })
      }
    })
  }
}
