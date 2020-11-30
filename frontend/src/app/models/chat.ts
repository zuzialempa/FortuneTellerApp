import { ChatMessage } from './chatMessage';

export interface Chat {
    userId: string,
    ftId: string,
    messages: Array<ChatMessage>,
}
