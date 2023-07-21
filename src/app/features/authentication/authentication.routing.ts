import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SplashComponent } from './screens/splash/splash.component';
import { SignupComponent } from './screens/signup/signup.component';
import { OtpComponent } from './screens/otp/otp.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'splash',
        component: SplashComponent,
      },

      {
        path: 'signup',
        component: SignupComponent,
      },

      {
        path: 'otp',
        component: OtpComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthenticationRoutingModule {}
