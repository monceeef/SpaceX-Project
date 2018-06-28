import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMap, LatLng, GoogleMaps, GoogleMapsEvent, GoogleMapsAnimation, MyLocation, Marker, GoogleMapOptions } from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-launch-pad-map',
  templateUrl: 'launch-pad-map.html',
})
export class LaunchPadMapPage {

  private googleMaps: GoogleMaps
  mapReady : boolean = false;
  @ViewChild('map') mapElement : ElementRef
  private mapEL: HTMLElement
  private map: GoogleMap
  private location: LatLng


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private platform: Platform) {
    this.location = new LatLng(42.346903, -71.135101);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchPadMapPage');
    this.mapEL = document.getElementById('map');
    let mapOptions : GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map')

  }



}
