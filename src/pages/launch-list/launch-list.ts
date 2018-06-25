import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { Launch } from "../../Models/Launch";
import { LaunchDetailsPage } from "../launch-details/launch-details";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { LaunchPadDetailsPage } from "../launch-pad-details/launch-pad-details";
@IonicPage()
@Component({
  selector: "page-launch-list",
  templateUrl: "launch-list.html"
})
export class LaunchListPage {
  launches: Launch[]
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private spacexAPI: SpacexApiProvider,
    public platform: Platform,
    public localNotifications: LocalNotifications
  ) {
    
    this.spacexAPI.getAllLaunches().subscribe(data => {
      this.launches = data.reverse();
    });

    this.spacexAPI.getAllFuturLaunches().subscribe(data => {
      data.forEach(futurLaunch => {
        this.localNotifications.schedule({
          id: futurLaunch.flight_number,
          text: futurLaunch.mission_name + " Mission starting now !",
          trigger: { at: new Date(futurLaunch.launch_date_local) },

        });
      });
    });
  }

  ionViewDidLoad() {}

  goToLaunchDetails(launch) {
    this.navCtrl.push(LaunchDetailsPage,launch)
  }

  goToLaunchPadDetails(id) {
    console.log("Clicked");
    this.navCtrl.push(LaunchPadDetailsPage, id)
  }
}
