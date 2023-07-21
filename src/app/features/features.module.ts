import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OnboardingComponent } from './onboarding/onboarding.component';

@NgModule({
  declarations: [OnboardingComponent],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class FeatureModule {}
