import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    RocketsPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    LaunchDetailsPage,
    RocketDetailPage,
    CompanyInfoPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RocketsPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    LaunchDetailsPage,
    RocketDetailPage,
    CompanyInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SpacexApiProvider
  ]
})
export class AppModule {}
