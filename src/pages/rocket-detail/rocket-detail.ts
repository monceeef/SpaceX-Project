import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Rocket } from "../../Models/Rocket";

/**
 * Generated class for the RocketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-rocket-detail",
  templateUrl: "rocket-detail.html"
})
export class RocketDetailPage {
  rocket: Rocket;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.rocket = this.navParams.data;
    console.log(this.rocket);
  }
}
