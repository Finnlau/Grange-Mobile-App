import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AddstudentPageModule } from './addstudent/addstudent.module';
import { DeletestudentPageModule } from './deletestudent/deletestudent.module';

import { LecturerdetailsPageModule } from './lecturerdetails/lecturerdetails.module';
import { ModuledetailsPageModule } from './moduledetails/moduledetails.module';
import { ExtramoduledetailsPageModule } from './extramoduledetails/extramoduledetails.module';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AddstudentPageModule, DeletestudentPageModule, LecturerdetailsPageModule, ModuledetailsPageModule, ExtramoduledetailsPageModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, Geolocation, NativeGeocoder,],
  bootstrap: [AppComponent],
})
export class AppModule {}
