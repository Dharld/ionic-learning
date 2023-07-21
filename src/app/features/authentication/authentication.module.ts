import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { OtpComponent } from './screens/otp/otp.component';
import { SignupComponent } from './screens/signup/signup.component';
import { SplashComponent } from './screens/splash/splash.component';
import { IonicModule } from '@ionic/angular';
import { AuthenticationRoutingModule } from './authentication.routing';

@NgModule({
  declarations: [
    AuthenticationComponent,
    OtpComponent,
    SignupComponent,
    SplashComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
  ],
})
export class AuthenticationModule {}
