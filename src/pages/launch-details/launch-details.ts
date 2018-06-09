import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Launch } from "../../Models/Launch";

/**
 * Generated class for the LaunchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-launch-details",
  templateUrl: "launch-details.html"
})
export class LaunchDetailsPage {
  launch: Launch;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.launch = this.navParams.data;
    console.log("ionViewDidLoad LaunchDetailsPage");
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
