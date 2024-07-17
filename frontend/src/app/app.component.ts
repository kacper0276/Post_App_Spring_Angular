import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as AuthActions from '../app/modules/auth/store/auth.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');

    translate.use('en');
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.autoLogin());
  }
}
