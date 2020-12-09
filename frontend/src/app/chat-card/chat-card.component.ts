import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChatMessage } from '../models/chatMessage';
import { Observable, of } from 'rxjs';
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
  chatSocket: WebSocket;

  constructor() {
    this.chat = {
      userId: "0",
      ftId: "0",
      messages: []
    }
  }
  
  ngOnInit(): void {
    console.log("CHAT ID - ", `${this.chat.ftId}_${this.chat.userId}`)
    this.chatSocket = new WebSocket(`ws://localhost:8000/ws/chat/${this.chat.ftId}_${this.chat.userId}/`);
    this.chatSocket.onmessage = (e) => {
      const {message} = JSON.parse(e.data);
      console.log("NEW MESS - ", message)
      this.chat.messages.push(message)
    };
  
    this.chatSocket.onclose = function (e) {
      console.error('Chat socket closed unexpectedly');
    };
    this.messages = this.chat.messages;
  }

  sendMessage() {
    const newMessage = {
      message: this.message.nativeElement.value,
      author: "ty",
    }
    console.log("SEND MESSAGE - ", JSON.stringify(newMessage))
    this.message.nativeElement.value = '';
    this.chatSocket.send(JSON.stringify(newMessage));
  }
}
