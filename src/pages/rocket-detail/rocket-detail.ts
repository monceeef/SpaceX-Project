import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Rocket } from "../../Models/Rocket";
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";

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
  rocketId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private spaceXProvider: SpacexApiProvider) {
      /*
      let param = this.navParams.data;
      if('name' in param) {
        this.rocket = this.navParams.data;
      } else {
        this.spaceXProvider
        .getRocketById(param)
        .subscribe(value => {
          this.rocket = value;
        })
      }
      */
    }

  ionViewDidLoad() {
    this.rocket = this.navParams.data;
  }

}
