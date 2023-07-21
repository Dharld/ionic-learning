import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './features/onboarding/onboarding.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/purchase/purchase.module').then(
        (m) => m.PurchaseModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'onboard',
    component: OnboardingComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
