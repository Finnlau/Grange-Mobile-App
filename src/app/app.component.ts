import { Component } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
    CapacitorGoogleMaps.initialize({
      key:"AIzaSyBiEwv_otLFoNMnBx6aKV8c0xw_EXF3Gy0"
    });
  }
}
