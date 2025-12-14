import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Router} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-logout-success',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatIcon
  ],
  templateUrl: './logout-success.html',
  styleUrl: './logout-success.scss',
})
export class LogoutSuccess {

  constructor(private router: Router) {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
