import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChatMessage } from '../models/chatMessage';
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
  @Input() isFT: boolean;
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
    this.chatSocket = new WebSocket(`ws://localhost:8000/ws/chat/${this.chat.ftId}/`);
    this.chatSocket.onmessage = (e) => {
      const { message } = JSON.parse(e.data);
      if (message.userId === this.chat.userId) {
        console.log("NEW MESS - ", message)
        if((this.isFT && message.author === this.chat.ftId) ||
            (!this.isFT && message.author === this.chat.userId)) {
          message.author = "ty"
        } else {
          message.author = "on"
        }
        this.chat.messages.push(message)
      }
    };

    this.chatSocket.onclose = function (e) {
      console.error('Chat socket closed unexpectedly');
    };
    this.messages = this.chat.messages;
  }

  sendMessage() {
    const newMessage = {
      message: this.message.nativeElement.value,
      author: this.isFT ? this.chat.ftId : this.chat.userId,
      userId: this.chat.userId
    }
    console.log("SEND MESSAGE - ", JSON.stringify(newMessage))
    this.message.nativeElement.value = '';
    this.chatSocket.send(JSON.stringify(newMessage));
  }
}
