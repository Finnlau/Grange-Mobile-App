import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuledetailsPageRoutingModule } from './moduledetails-routing.module';

import { ModuledetailsPage } from './moduledetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuledetailsPageRoutingModule
  ],
  declarations: [ModuledetailsPage]
})
export class ModuledetailsPageModule {}
