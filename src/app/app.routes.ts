import {Routes} from '@angular/router';
import {RegistrationComponent} from './register/register';
import {LoginComponent} from './login/login';
import {VerifyEmailComponent} from './verify-email/verify-email.component';

export const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  { path: 'verify-email', component: VerifyEmailComponent }
]
