import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Module } from './module';
import { modules } from './modules';
import { ExtraModule, ExtramoduleService } from '../services/extramodule.service';
import { Observable } from 'rxjs';

//Bottom Sheet Modal
import { ModalController } from '@ionic/angular';
import { ExtramodulePage} from '../extramodule/extramodule.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit{

  modules = modules;
  
  constructor(private router: Router, private modalCtrl: ModalController) {}

  openPage(module: any){
    let navigationExtras: NavigationExtras = {
      state: {
        module : module
      }
    };
    this.router.navigate(['moduledetails'], navigationExtras);
  }
  
  //Bottom Sheet Modal
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ExtramodulePage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

  ngOnInit() {
  }

}