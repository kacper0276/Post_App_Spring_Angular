import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  messages = [
    {
      data: new Date('2024-07-11T10:00:00Z'),
      message: 'Dzień dobry, jak się masz?',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:01Z'),
      message: 'Witam, wszystko w porządku?',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:02Z'),
      message: 'Czy masz już plan na dzisiejszy dzień?',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:03Z'),
      message: 'Tak, mam kilka spotkań zaplanowanych.',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:04Z'),
      message: 'Brzmi świetnie, może spotkamy się na lunch?',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:05Z'),
      message: 'Chętnie, o której Ci pasuje?',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:06Z'),
      message: 'Może o 13:00?',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:07Z'),
      message: 'Pasuje, spotkajmy się w naszej ulubionej restauracji.',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:08Z'),
      message: 'Świetnie, do zobaczenia!',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:09Z'),
      message: 'Do zobaczenia!',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:10Z'),
      message: 'Czy widziałeś ostatnie wiadomości?',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:11Z'),
      message: 'Tak, dużo się dzieje na świecie.',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:12Z'),
      message: 'Zgadza się, musimy być na bieżąco.',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:13Z'),
      message: 'Jakie masz plany na weekend?',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:14Z'),
      message: 'Myślę o wyjeździe za miasto.',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:15Z'),
      message: 'Brzmi jak świetny plan!',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:16Z'),
      message: 'Tak, potrzebuję trochę odpoczynku.',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:17Z'),
      message: 'Rozumiem, odpoczynek jest ważny.',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:18Z'),
      message: 'Czy masz jakieś rekomendacje na książki?',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:19Z'),
      message: 'Tak, mogę polecić kilka ciekawych tytułów.',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:20Z'),
      message: 'Byłoby świetnie, dzięki!',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:21Z'),
      message: 'Proszę bardzo, zawsze do usług.',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:22Z'),
      message: 'Jak Twoje projekty w pracy?',
      from: 'test1',
      to: 'test2',
    },
    {
      data: new Date('2024-07-11T10:00:23Z'),
      message: 'Wszystko idzie zgodnie z planem, dziękuję.',
      from: 'test2',
      to: 'test1',
    },
    {
      data: new Date('2024-07-11T10:00:24Z'),
      message: 'To świetnie, powodzenia!',
      from: 'test1',
      to: 'test2',
    },
  ];

  constructor() {
    this.messages.sort((a, b) => b.data.getTime() - a.data.getTime());
  }
}
