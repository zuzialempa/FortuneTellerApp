import { Component, OnInit } from '@angular/core';
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
  constructor() {
    this.chats = [testchat, testchat, testchat];
    console.log(this.chats.length)
  }


  ngOnInit(): void {
  }

}
