import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { TweetdataService } from '../services/tweetdata.service';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  //Google Map Marker Location String
  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 53.35456346709633,        
        lng: -6.279248933721975,
      },
      title: 'Grangegorman Campus'
    },
    {
      position: {
        lat: 53.33720623614971,    
        lng: -6.26766278462011,
      },
      title: 'Kevin Street Campus'
    },
    {
      position: {
        lat: 53.35233494652029,
        lng: -6.2692496589637425,    
      },
      title: 'Bolton Street Campus'
    },
    {
      position: {
        lat: 53.3386476146182,         
        lng: -6.266010543941503,       
      },
      title: 'Aungier Street Campus'
    },
    {
      position: {
        lat: 53.35253698649075,         
        lng: -6.258848965579236,    
      },
      title: 'Cathal Brugha Street Campus'
    },
  ];

  ngOnInit() {
      this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 53.347, lng: -6.271};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      disableDefaultUI: true
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  //Google Map Marker Render
  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });
  }

  //Geo Location For Map
  ShowCurrentPosition() {
    Geolocation.requestPermissions().then( async permission => {
      const coordinates = await Geolocation.getCurrentPosition();

      CapacitorGoogleMaps.addMarker({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        title: 'Your Position',
      });

    })
  }

  user=null;
  tweets: any;

  constructor(public httpClient: HttpClient, private tweetdataservice: TweetdataService ) {
    if (!isPlatform('capacitor')){
      GoogleAuth.initialize();
    }
  }

  // Google LogIn API 
  async signIn() {
    this.user = await GoogleAuth.signIn();
    console.log('user: ', this.user);
  }

  //async refresh() {
    //const authCode = await GoogleAuth.refresh();
    //console.log('refresh: ', authCode);
    //{accessToken: 'xxx', idToken: 'xxx'}
  //}

  async signOut() {
    await GoogleAuth.signOut();
    this.user=null;
  }

  //Twitter API
  getTweets(){
    // Subscribe to tweetdata service getTwitterTimeline()
    this.tweetdataservice.getTwitterTimeline().subscribe(result => {
      // Pass results to tweets variable
      this.tweets = result['tweets'];
    });

  }

  ionViewWillEnter(){
    // Update tweets when view loads
    this.getTweets();
  }
  
}
