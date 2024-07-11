import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss',
})
export class ChatMessageComponent {
  @Input() message: any;

  // TODO: Dodać żeby po kliknięciu wyświetlić datę
}
