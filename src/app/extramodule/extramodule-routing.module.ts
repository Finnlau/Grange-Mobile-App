import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtramodulePage } from './extramodule.page';

const routes: Routes = [
  {
    path: '',
    component: ExtramodulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtramodulePageRoutingModule {}
