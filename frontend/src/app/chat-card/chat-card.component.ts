import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatMessage } from '../models/chatMessage';
import { FormControl } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {
  messageController = new FormControl('');
  messages: ChatMessage[] = [{
    author: "test",
    message: "eqgafgaggfhrtjedeafva",
    chatId: 1
  }];
  chatId = 1;
  author = "test";
  @ViewChild('message') inputName: any;
  constructor(private socket: Socket) {
  }

  ngOnInit(): void {
  }
  public getMessages = () => {
    return new Observable((observer) => {
      this.socket.on(`newMessage_${this.chatId}`, (message) => {
        console.log(message)
        observer.next(message);
      });
    });
  }
  
  sendMessage() {
    const newMessage = {
      message: this.inputName.nativeElement.value,
      author: this.author,
      chatId:this.chatId
    }
    this.messages.push(newMessage)
    this.socket.emit(`newMessage_${this.chatId}`, newMessage);
    this.inputName.nativeElement.value = '';
  }
}
