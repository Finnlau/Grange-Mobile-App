import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuledetailsPage } from './moduledetails.page';

const routes: Routes = [
  {
    path: '',
    component: ModuledetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuledetailsPageRoutingModule {}
