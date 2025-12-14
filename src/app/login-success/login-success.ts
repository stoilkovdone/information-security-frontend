import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../_service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-success',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButton
  ],
  templateUrl: './login-success.html'
})
export class LoginSuccess {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  onLogout() {
    this.authService.logout().subscribe(
      () => this.router.navigate(['/logout-success'])
    );
  }

}
