import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PurchaseComponent } from './purchase.component';
import { PurchaseRoutingModule } from './purchase.routing';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    PurchaseComponent,
    HomeComponent,
    ExploreComponent,
    CartComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, PurchaseRoutingModule, IonicModule],
})
export class PurchaseModule {}
