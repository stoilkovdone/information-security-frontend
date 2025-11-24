import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';

@Component({
  selector: 'app-verify-email',
  imports: [
    MatButton,
    MatCardContent,
    MatCard,
    MatIcon,
    MatProgressSpinner
  ],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class VerifyEmailComponent implements OnInit{
  loading = true;
  success = false;
  error = false;
  errorMessage = '';
  canResend = false;
  private token: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParams['token'];

    if (!this.token) {
      this.showError('Invalid verification link');
      return;
    }

    this.verifyEmail();
  }

  verifyEmail() {
    this.authService.verifyEmail(this.token).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
      },
      error: (err) => {
        this.loading = false;
        this.showError(err.error?.message || 'Verification failed');
      }
    });
  }

  showError(message: string) {
    this.error = true;
    this.errorMessage = message;
    this.canResend = message.includes('expired');
  }

  resendEmail() {
    this.router.navigate(['/resend-verification']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
