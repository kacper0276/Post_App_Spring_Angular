import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';

const routes: Routes = [
  {
    path: 'ustawienia-uzytkownika',
    component: ChangeUserDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSettingsRoutingModule {}
