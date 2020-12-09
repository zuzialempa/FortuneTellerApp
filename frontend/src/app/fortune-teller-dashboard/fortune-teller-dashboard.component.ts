import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Chat } from '../models/chat';
const testchat =  {
  userId: "1",
  ftId: "1",
  messages: [
    {
      author: "test",
      message: "uvgiafliuhncoiegeiunhf"
    }
  ]
}
@Component({
  selector: 'fortune-teller-dashboard',
  templateUrl: './fortune-teller-dashboard.component.html',
  styleUrls: ['./fortune-teller-dashboard.component.css']
})
export class FortuneTellerDashboardComponent implements OnInit {

  chats: Chat[];
  chatSocket: WebSocket;
  ftId: string;
  constructor(private cookieService: CookieService) {
    this.chats = [testchat];
    this.ftId = this.cookieService.get("fortuneTeller")
  }


  ngOnInit(): void {
    this.chatSocket = new WebSocket(`ws://localhost:8000/ws/chat/${this.ftId}/`);
    this.chatSocket.onmessage = (e) => {
      const { message } = JSON.parse(e.data);
      const item = this.chats.find(i => i.userId === message.userId);
      if (!item) {
        message.author="on"
        this.chats.push({
          ftId: this.ftId,
          userId: message.userId,
          messages: [message]
        })
      }
    };
  }

}
