import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './modules/shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { authReducer } from './modules/auth/store/auth.reducer';
import { AuthEffects } from './modules/auth/store/auth.effects';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule,
    StoreModule.forRoot({ auth: authReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
