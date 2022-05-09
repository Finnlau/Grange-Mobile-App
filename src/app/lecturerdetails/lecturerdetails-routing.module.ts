import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerdetailsPage } from './lecturerdetails.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerdetailsPageRoutingModule {}
