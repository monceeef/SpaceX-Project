import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Capsule } from "../../Models/Capsule";
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";

/**
 * Generated class for the CapsuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-capsule-details",
  templateUrl: "capsule-details.html"
})
export class CapsuleDetailsPage {
  capsule: Capsule;
  capsuleId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private spaceXProvider: SpacexApiProvider) {
  }

  ionViewDidLoad() {
    this.capsule = this.navParams.data;
  }

}
