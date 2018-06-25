import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchPad } from "../../Models/Launch";
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";


@IonicPage()
@Component({
  selector: 'page-launch-pad-details',
  templateUrl: 'launch-pad-details.html',
})
export class LaunchPadDetailsPage {
  launchPad: LaunchPad
  launchPadId : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider : SpacexApiProvider) {
    this.launchPadId = this.navParams.data;
    this.provider.getLaunchPadDetails(this.navParams.data).subscribe(value => {
      console.log(value);
      this.launchPad = value;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchPadDetailsPage');
  }
}
