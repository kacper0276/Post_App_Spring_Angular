import { NgModule } from '@angular/core';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserProfilePageComponent],
  imports: [SharedModule, UserProfileRoutingModule],
})
export class UserProfileModule {}
