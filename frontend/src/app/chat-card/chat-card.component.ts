import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChatMessage } from '../models/chatMessage';
// import { FormControl } from '@angular/forms';
// import { Socket } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Chat } from '../models/chat';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {
  messageController = new FormControl('');
  @ViewChild('message') message: any;
  @Input() ftId: string;
  @Input() chat: Chat;
  messages: ChatMessage[];

  constructor() {
    console.log("aaaaa", this.chat)
    this.chat = {
      userId: "0",
      ftId: "0",
      messages: []
    }
    // constructor(private socket: Socket) {
    // const userId = this.cookieService.get(this.router.url.split("/")[2]); //because ftId is not initialized yet
    // this.chatActive = userId !== undefined && userId !== '';
  }

  ngOnInit(): void {
    console.log("bbb", this.chat)
    this.messages = this.chat.messages;
  }

  public getMessages = () => {
    return new Observable((observer) => {
      // this.socket.on(`newMessage_${this.chatId}`, (message) => {
      //   console.log(message)
      //   observer.next(message);
      // });
    });
  }
  sendMessage() {
    console.log("newmes - ", this.message.nativeElement.value)
    const newMessage = {
      message: this.message.nativeElement.value,
      author: "ty",
    }
    this.chat.messages.push(newMessage)
    // this.socket.emit(`newMessage_${this.chatId}`, newMessage);
    this.message.nativeElement.value = '';
  }
}
