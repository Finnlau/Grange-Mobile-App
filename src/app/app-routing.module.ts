import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'addstudent',
    loadChildren: () => import('./addstudent/addstudent.module').then( m => m.AddstudentPageModule)
  },
  {
    path: 'deletestudent',
    loadChildren: () => import('./deletestudent/deletestudent.module').then( m => m.DeletestudentPageModule)
  },
  {
    path: 'lecturerdetails',
    loadChildren: () => import('./lecturerdetails/lecturerdetails.module').then( m => m.LecturerdetailsPageModule)
  },
  {
    path: 'moduledetails',
    loadChildren: () => import('./moduledetails/moduledetails.module').then( m => m.ModuledetailsPageModule)
  },
  {
    path: 'extramoduledetails',
    loadChildren: () => import('./extramoduledetails/extramoduledetails.module').then( m => m.ExtramoduledetailsPageModule)
  },
  {
    path: 'extramoduledetails/:moduleID',
    loadChildren: () => import('./extramoduledetails/extramoduledetails.module').then( m => m.ExtramoduledetailsPageModule)
  },
  {
    path: 'extramodule',
    loadChildren: () => import('./extramodule/extramodule.module').then( m => m.ExtramodulePageModule)
  },
  
  //{
    //path: 'tab4',
    //loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  //}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
