import { Component, Input } from '@angular/core';
import { IMessage } from '../../../core/models/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss',
})
export class ChatMessageComponent {
  @Input() message!: IMessage;
  @Input() username!: string;

  // TODO: Dodać żeby po kliknięciu wyświetlić datę
}
