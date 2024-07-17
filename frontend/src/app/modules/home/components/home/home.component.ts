import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private titleService: Title,
    private translate: TranslateService
  ) {
    titleService.setTitle('Strona główna');
  }

  changeLanguage(lang: 'pl' | 'en'): void {
    this.translate.use(lang);
  }
}
