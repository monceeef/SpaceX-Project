import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { LocalNotifications } from '@ionic-native/local-notifications';

import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { SpacexApiProvider } from "../providers/spacex-api/spacex-api";
import { HttpClientModule } from "@angular/common/http";
import { LaunchListPage } from "../pages/launch-list/launch-list";
import { LaunchDetailsPage } from "../pages/launch-details/launch-details";
import { CompanyInfoPage } from "../pages/company-info/company-info";
import { RocketsPage } from "../pages/rockets/rockets";
import { RocketDetailPage } from "../pages/rocket-detail/rocket-detail";
import { LaunchPadDetailsPage } from "../pages/launch-pad-details/launch-pad-details";

@NgModule({
  declarations: [
    MyApp,
    RocketsPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    LaunchDetailsPage,
    RocketDetailPage,
    CompanyInfoPage,
    LaunchPadDetailsPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RocketsPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    LaunchDetailsPage,
    RocketDetailPage,
    CompanyInfoPage,
    LaunchPadDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SpacexApiProvider,
    LocalNotifications
  ]
})
export class AppModule {}
