import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform, FabContainer } from "ionic-angular";
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { Launch } from "../../Models/Launch";
import { LaunchDetailsPage } from "../launch-details/launch-details";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { LaunchPadDetailsPage } from "../launch-pad-details/launch-pad-details";
import { RocketDetailPage } from "../rocket-detail/rocket-detail";

@IonicPage()
@Component({
  selector: "page-launch-list",
  templateUrl: "launch-list.html"
})
export class LaunchListPage {

  remainingTime = 0;
  remainingTimeString: String;

  futureLaunches: Launch[];
  pastLaunches: Launch[];
  nextLaunch: Launch;
  countDownDate : Date;
  rocketList: string = "future";

  launches: Launch[];

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private spacexAPI: SpacexApiProvider,
    public platform: Platform,
    public localNotifications: LocalNotifications
  ) {

    setInterval( () => { this.logRemainingTime() } ,1000);

    this.spacexAPI.getNextLaunch().subscribe(data => {
      this.nextLaunch = data;
      this.countDownDate = new Date(this.nextLaunch.launch_date_local)
    });

    this.spacexAPI.getAllFuturLaunches().subscribe(data => {
      this.futureLaunches = data;
    });
    

    this.spacexAPI.getAllLaunches().subscribe( data => {
      this.launches = data;
    });
  }

  loadPastLaunches(fab: FabContainer) {
    this.launches.length = 0;
    this.spacexAPI.getAllPastLaunches().subscribe(data => {
      this.launches = data;
    })
    fab.close();
  }

  loadFutureLaunches(fab : FabContainer) {
    this.launches.length = 0;
    this.spacexAPI.getAllFuturLaunches().subscribe(data => {
      this.launches = data;
    })
    fab.close();
  }

  loadLaunchesByStatus(fab : FabContainer, bool) {
    this.launches.length = 0;
    this.spacexAPI.getLaunchesByStatus(bool).subscribe(data => {
        this.launches = data;
    })
    fab.close();
  }

  loadSucceededLaunches(fab : FabContainer){
    this.launches.length = 0;
    this.spacexAPI.getSucceededLaunches().subscribe(data => {
      this.launches = data;
    })
    fab.close();
  }

  loadFailedLaunches(fab : FabContainer){
    this.launches.length = 0;
    this.spacexAPI.getFailedLaunches().subscribe(data => {
      this.launches = data;
    })
    fab.close();
  }

  loadAllLaunches(fab : FabContainer){
    this.launches.length = 0;
    this.spacexAPI.getAllLaunches().subscribe(data => {
      this.launches = data;
    })
    fab.close();
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

  goToRocketDetails(id){
    this.navCtrl.push(RocketDetailPage, id);
  }

  logRemainingTime(){

    if(this.nextLaunch) {

      let now = new Date().getTime()
      this.remainingTime = this.countDownDate.getTime() - now

      let days = Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
      let hours = Math.floor((this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor(this.remainingTime % (1000 * 60) / 1000);

      //console.log( days +' : ' + hours + ' : ' + minutes + ' : ' +seconds);
      this.remainingTimeString = days +'d ' + hours + 'h ' + minutes + 'm ' +seconds + 's';
    }
    
  }

}
