import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtramoduledetailsPage } from './extramoduledetails.page';

const routes: Routes = [
  {
    path: '',
    component: ExtramoduledetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtramoduledetailsPageRoutingModule {}
