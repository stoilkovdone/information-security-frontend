import {Routes} from '@angular/router';
import {RegistrationComponent} from './register/register';
import {LoginComponent} from './login/login';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {VerificationEmailPending} from './verification-email-pending/verification-email-pending';
import {LoginSuccess} from './login-success/login-success';
import {LogoutSuccess} from './logout-success/logout-success';
import {OtpVerification} from './otp-verification/otp-verification';

export const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'verify-otp', component: OtpVerification},
  {path: 'complete-registration', component: VerificationEmailPending},
  {path: 'login-success', component: LoginSuccess},
  {path: 'logout-success', component: LogoutSuccess},
  {path: 'verify-email', component: VerifyEmailComponent}
]
