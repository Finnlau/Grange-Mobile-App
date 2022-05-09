import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LecturerdetailsPageRoutingModule } from './lecturerdetails-routing.module';

import { LecturerdetailsPage } from './lecturerdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerdetailsPageRoutingModule
  ],
  declarations: [LecturerdetailsPage]
})
export class LecturerdetailsPageModule {}
