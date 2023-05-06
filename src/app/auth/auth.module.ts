import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent,
    RegistrationComponent,
    LoginLayoutComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
