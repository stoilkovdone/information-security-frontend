import {Routes} from '@angular/router';
import {RegistrationComponent} from './register/register';
import {LoginComponent} from './login/login';

export const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
]
