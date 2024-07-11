import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.scss',
})
export class UserProfilePageComponent {
  id!: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }
}
