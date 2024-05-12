import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-user-post',
  templateUrl: './add-user-post.component.html',
  styleUrl: './add-user-post.component.scss',
})
export class AddUserPostComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('Dodaj artykuł');
  }
}
