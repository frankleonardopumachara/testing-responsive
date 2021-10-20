import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule
} from '@nebular/theme'
import {NbAuthModule} from '@nebular/auth';
import { LoginComponent } from './components/login/login.component'
import {FormsModule} from '@angular/forms';
import { PasswordRecoverComponent } from './components/password-recover/password-recover.component'


@NgModule({
  declarations: [
    AuthPageComponent,
    LoginComponent,
    PasswordRecoverComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbAuthModule,
    NbAlertModule,
    NbInputModule,
    FormsModule,
    NbCheckboxModule,
    NbButtonModule
  ]
})
export class AuthModule { }
