import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Rocket } from "../../Models/Launch";
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { RocketDetailPage } from "../rocket-detail/rocket-detail";

@Component({
  selector: "page-rockets",
  templateUrl: "rockets.html"
})
export class RocketsPage {
  rockets: Rocket[];
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private spacexAPI: SpacexApiProvider
  ) {
    this.spacexAPI.getAllRockets().subscribe(data => {
      this.rockets = data;
    });
  }

  goToRocketDetail(rocket) {
    this.navCtrl.push(RocketDetailPage, rocket);
  }
}
