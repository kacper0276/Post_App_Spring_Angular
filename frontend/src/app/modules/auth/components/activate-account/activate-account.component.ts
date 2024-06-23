import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
})
export class ActivateAccountComponent implements OnInit {
  errorMessage: null | string = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) =>
          this.authService.activateAccount(Number(params.get('id')))
        )
      )
      .subscribe({
        next: (response) => {
          console.log(response);

          this.router.navigate(['/logowanie']);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
        },
      });
  }
}
