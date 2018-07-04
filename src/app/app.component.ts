import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { Launch } from '../Models/Launch';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  futureLaunches: Launch[];

  constructor(
    private platform: Platform,
     statusBar: StatusBar,
     splashScreen: SplashScreen,
     private spacexAPI: SpacexApiProvider,
     private localNotifications: LocalNotifications) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initNotification();
    });
  }

  initNotification() {
    if (this.platform.is("cordova")) {
      this.spacexAPI.getAllFuturLaunches().subscribe(data => {
        this.futureLaunches = data;
        // Test of notification
        this.localNotifications.schedule({
          id: 4242,
          text: "TestNotifications Mission starting now !",
          trigger: { at: new Date(new Date().getTime() + 3600) },
        });
        var myArr = [];

        data.forEach(futurLaunch => {
          myArr.push({
            id: futurLaunch.flight_number,
            text: futurLaunch.mission_name + " Mission starting now !",
            trigger: { at: new Date(futurLaunch.launch_date_local) }
          })
        });
        //var lDate =  new Date(futurLaunch.launch_date_local)
        //  this.localNotifications.schedule({
        //    id: futurLaunch.flight_number,
        //    text: futurLaunch.mission_name + " Mission starting now !",
        //    trigger: { at: new Date(futurLaunch.launch_date_local) }
        //  });
        console.log(myArr);
        this.localNotifications.schedule(myArr);
      });
    }
  }
}
