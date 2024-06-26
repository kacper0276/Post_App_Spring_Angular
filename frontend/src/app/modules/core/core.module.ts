import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CountdownTimeSinceCreationPipe } from './pipe/countdown-time-since-creation.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CountdownTimeSinceCreationPipe,
  ],
  imports: [SharedModule, RouterLink, RouterLinkActive, HttpClientModule],
  exports: [HeaderComponent, FooterComponent, CountdownTimeSinceCreationPipe],
})
export class CoreModule {}
