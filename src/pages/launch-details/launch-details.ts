import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { Launch, LaunchPad } from "../../Models/Launch";
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { GoogleMap, LatLng, GoogleMaps, GoogleMapsEvent, GoogleMapsAnimation, MyLocation, Marker, GoogleMapOptions } from "@ionic-native/google-maps";
import { LaunchPadMapPage } from "../launch-pad-map/launch-pad-map";

@IonicPage()
@Component({
  selector: "page-launch-details",
  templateUrl: "launch-details.html"
})
export class LaunchDetailsPage {
  launch: Launch;
  launchPad : LaunchPad
  mapReady : boolean = false;

  @ViewChild('map') mapElement : ElementRef
  private map: GoogleMap
  private location: LatLng


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private spaceXProvider: SpacexApiProvider, private googleMaps: GoogleMaps,
  private platform: Platform) {
    this.location = new LatLng(42.346903, -71.135101);
  }

  ionViewDidLoad() {
    this.launch = this.navParams.data;
    console.log("ionViewDidLoad LaunchDetailsPage");
  }

  setRocketLaunchPad(){
    this.spaceXProvider.getLaunchPadDetails(this.launch.launch_site.site_id)
    .subscribe(data => {
      this.launchPad = data
    })
  }

  showMap() {

  console.log('Hello World');

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

goToExternalUri(uri: string) {
    if (uri == "article") {
      window.open(this.launch.links.article_link, "_system");
    } else if (uri == "wiki") {
      window.open(this.launch.links.wikipedia, "_system");
    } else {
      window.open(this.launch.links.video_link, "_system");
    }
  }
}
