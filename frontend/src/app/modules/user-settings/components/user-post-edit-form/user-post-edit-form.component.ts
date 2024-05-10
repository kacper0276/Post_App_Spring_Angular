import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-post-edit-form',
  templateUrl: './user-post-edit-form.component.html',
  styleUrl: './user-post-edit-form.component.scss',
})
export class UserPostEditFormComponent implements OnInit {
  id!: number | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    console.log(this.id);
  }
}
