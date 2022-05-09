import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtramodulePageRoutingModule } from './extramodule-routing.module';

import { ExtramodulePage } from './extramodule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtramodulePageRoutingModule
  ],
  declarations: [ExtramodulePage]
})
export class ExtramodulePageModule {}
