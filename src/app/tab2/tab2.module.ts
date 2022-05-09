import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { StudentcreateService } from '../services/studentcreate.service';
import { StudentdataService } from '../services/studentdata.service';
import { ModuledataService } from '../services/moduledata.service';
import { LecturerdataService } from '../services/lecturerdata.service';
import { Tab2PageRoutingModule } from './tab2-routing.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page],
  providers: [StudentcreateService, StudentdataService, ModuledataService, LecturerdataService],
})
export class Tab2PageModule {}
