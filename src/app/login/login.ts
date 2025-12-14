import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NgIf} from '@angular/common';
import {AuthService} from '../_service/auth.service';
import {UserLogin} from '../_model/user-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    NgIf
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userLogin: UserLogin = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }

      this.authService.login(userLogin).subscribe(
        () => this.router.navigate(['/verify-otp'], {
          queryParams: {
            email: userLogin.email
          }
        }),
      );
    }
  }
}
