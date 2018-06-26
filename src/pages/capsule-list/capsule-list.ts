import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { CapsuleDetailsPage } from "../capsule-details/capsule-details";
import { Capsule } from "../../Models/Capsule";

@Component({
  selector: "page-capsule-list",
  templateUrl: "capsule-list.html"
})
export class CapsuleListPage {
  capsules: Capsule[];
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private spacexAPI: SpacexApiProvider
  ) {
    this.spacexAPI.getAllCapsules().subscribe(data => {
      this.capsules = data;
    });
  }

  goToCapsuleDetail(capsule) {
    this.navCtrl.push(CapsuleDetailsPage, capsule);
  }
}