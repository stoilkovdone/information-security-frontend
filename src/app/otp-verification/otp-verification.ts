import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {VerifyOtp} from '../_model/verify-otp.model';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './otp-verification.html'
})
export class OtpVerification implements OnInit {
  otpForm!: FormGroup;
  userEmail = signal('');
  loading = signal(false);
  error = signal(false);
  errorMessage = signal('');

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const email = this.route.snapshot.queryParamMap.get('email');

    if (!email) {
      this.router.navigate(['/login']);
      return;
    }

    this.userEmail.set(email);

    this.otpForm = this.fb.group({
      otp: ['', [
        Validators.required,
        Validators.pattern(/^\d{8}$/),
        Validators.minLength(8),
        Validators.maxLength(8)
      ]]
    });
  }

  verifyOtp() {
    if (this.otpForm.invalid) {
      return;
    }

    this.loading.set(true);
    this.error.set(false);
    this.errorMessage.set('');

    const otpCode = this.otpForm.get('otp')?.value;

    console.log('otp code', otpCode)
    console.log('user email', this.userEmail())

    const verifyOtp: VerifyOtp = {
      email: this.userEmail(),
      otp: otpCode
    };

    this.authService.verifyOtp(verifyOtp).subscribe({
      next: () => {
        this.loading.set(false);

        // Navigate to dashboard or home
        this.router.navigate(['/login-success']);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(true);
        this.errorMessage.set(
          err.error?.message || 'Invalid or expired OTP. Please try again.'
        );
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
