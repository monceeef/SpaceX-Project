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
  futureLaunches: Launch[];
  pastLaunches: Launch[];
  nextLaunch: Launch;
  rocketList: string = "future";

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private spacexAPI: SpacexApiProvider,
    public platform: Platform,
    public localNotifications: LocalNotifications
  ) {
    this.spacexAPI.getAllLaunches().subscribe(data => {
      this.futureLaunches = data.reverse();
    });

    this.spacexAPI.getAllPastLaunches().subscribe(data => {
      this.pastLaunches = data;
    });
    this.spacexAPI.getNextLaunch().subscribe(data => {
      this.nextLaunch = data;
    });
    this.spacexAPI.getAllFuturLaunches().subscribe(data => {
      this.futureLaunches = data;
      data.forEach(futurLaunch => {
        this.localNotifications.schedule({
          id: futurLaunch.flight_number,
          text: futurLaunch.mission_name + " Mission starting now !",
          trigger: { at: new Date(futurLaunch.launch_date_local) }
        });
      });
    });
  }

  ionViewDidLoad() {}

  goToLaunchDetails(launch) {
    this.navCtrl.push(LaunchDetailsPage, launch);
  }
  goToExternalUri(uri: string) {
    if (uri == "article") {
      window.open(this.nextLaunch.links.article_link, "_system");
    } else if (uri == "wiki") {
      window.open(this.nextLaunch.links.wikipedia, "_system");
    } else {
      window.open(this.nextLaunch.links.video_link, "_system");
    }
  }

  goToLaunchPadDetails(id) {
    this.navCtrl.push(LaunchPadDetailsPage, id);
  }
}
