import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {NgIf} from '@angular/common';
import {UserRegister} from '../_model/user-register';
import {AuthService} from '../_service/auth.service';

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
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegistrationComponent implements OnInit{
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^A-Za-z0-9])\\S+$")
      ]]
    });
  }

  onSubmit() {

    if (this.registrationForm.valid) {
      const userRegister: UserRegister = {
        username: this.registrationForm.get('username')?.value,
        email: this.registrationForm.get('email')?.value,
        password: this.registrationForm.get('password')?.value
      }

      this.authService.register(userRegister);
    }
  }
}
