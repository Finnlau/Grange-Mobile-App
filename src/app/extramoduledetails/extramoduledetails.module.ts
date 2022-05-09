import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtramoduledetailsPageRoutingModule } from './extramoduledetails-routing.module';

import { ExtramoduledetailsPage } from './extramoduledetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtramoduledetailsPageRoutingModule
  ],
  declarations: [ExtramoduledetailsPage]
})
export class ExtramoduledetailsPageModule {}
