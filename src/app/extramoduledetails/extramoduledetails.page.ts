import { Component, OnInit } from '@angular/core';
import { ExtraModule, ExtramoduleService } from '../services/extramodule.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ExtramodulePage} from '../extramodule/extramodule.page';

@Component({
  selector: 'app-extramoduledetails',
  templateUrl: './extramoduledetails.page.html',
  styleUrls: ['./extramoduledetails.page.scss'],
})
export class ExtramoduledetailsPage implements OnInit {

  extramodule:ExtraModule = {
    moduleNo: '',
    moduleName: '',
    moduleCredits: '',
  };

  constructor(private activatedRoute: ActivatedRoute, private extramoduleService: ExtramoduleService, private toastCtrl: ToastController, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let moduleID = this.activatedRoute.snapshot.paramMap.get('moduleID');
    console.log(moduleID);
    if (moduleID) {
      console.log(moduleID);
      this.extramoduleService.getExtraModule(moduleID).subscribe(extramodule => {
        this.extramodule = extramodule;
      });
    }
  }

  addExtraModule() {
    this.extramoduleService.addExtraModule(this.extramodule).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Extra Module added');
    }, err => {
      this.showToast('There was a problem adding your Module : (');
    });
  }

  deleteExtraModule(){
    this.extramoduleService.deleteExtraModule(this.extramodule.moduleID).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Extra Module deleted');
    }, err => {
      this.showToast('There was a problem deleting your Module : (');
    });
  }

  updateExtraModule(){
    this.extramoduleService.updateExtraModule(this.extramodule).then(() => {
      this.showToast('Extra Module updated');
      //this.router.navigateByUrl('/');
    }, err => {
      this.showToast('There was a problem updating your module : (');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  //bottom modal for extra module list
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ExtramodulePage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

}
