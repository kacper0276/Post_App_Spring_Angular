import { Component } from '@angular/core';
import { IMessage } from '../../../core/models/message.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { IUser } from '../../../core/models/auth.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  messages: IMessage[] = [
    {
      date: new Date('2024-07-11T10:00:00Z'),
      text: 'Dzień dobry, jak się masz?',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:01Z'),
      text: 'Witam, wszystko w porządku?',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:02Z'),
      text: 'Czy masz już plan na dzisiejszy dzień?',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:03Z'),
      text: 'Tak, mam kilka spotkań zaplanowanych.',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:04Z'),
      text: 'Brzmi świetnie, może spotkamy się na lunch?',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:05Z'),
      text: 'Chętnie, o której Ci pasuje?',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:06Z'),
      text: 'Może o 13:00?',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:07Z'),
      text: 'Pasuje, spotkajmy się w naszej ulubionej restauracji.',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:08Z'),
      text: 'Świetnie, do zobaczenia!',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:09Z'),
      text: 'Do zobaczenia!',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:10Z'),
      text: 'Czy widziałeś ostatnie wiadomości?',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:11Z'),
      text: 'Tak, dużo się dzieje na świecie.',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:12Z'),
      text: 'Zgadza się, musimy być na bieżąco.',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:13Z'),
      text: 'Jakie masz plany na weekend?',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:14Z'),
      text: 'Myślę o wyjeździe za miasto.',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:15Z'),
      text: 'Brzmi jak świetny plan!',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:16Z'),
      text: 'Tak, potrzebuję trochę odpoczynku.',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:17Z'),
      text: 'Rozumiem, odpoczynek jest ważny.',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:18Z'),
      text: 'Czy masz jakieś rekomendacje na książki?',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:19Z'),
      text: 'Tak, mogę polecić kilka ciekawych tytułów.',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:20Z'),
      text: 'Byłoby świetnie, dzięki!',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:21Z'),
      text: 'Proszę bardzo, zawsze do usług.',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:22Z'),
      text: 'Jak Twoje projekty w pracy?',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
    {
      date: new Date('2024-07-11T10:00:23Z'),
      text: 'Wszystko idzie zgodnie z planem, dziękuję.',
      messageFromUsername: 'test2',
      messageToUsername: 'test1',
    },
    {
      date: new Date('2024-07-11T10:00:24Z'),
      text: 'świetnie, powodzenia!',
      messageFromUsername: 'test1',
      messageToUsername: 'test2',
    },
  ];
  username!: string;

  constructor(private store: Store<AppState>) {
    this.messages.sort((a, b) => a.date.getTime() - b.date.getTime());

    store.select(selectAuthUser).subscribe({
      next: (val: IUser | null) => {
        if (val?.username != undefined) {
          this.username = val?.username;
        }
      },
    });
  }
}
