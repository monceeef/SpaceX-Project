import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { SpacexApiProvider } from "../providers/spacex-api/spacex-api";
import { HttpClientModule } from "@angular/common/http";
import { LaunchListPage } from "../pages/launch-list/launch-list";
import { LaunchDetailsPage } from "../pages/launch-details/launch-details";
import { CompanyInfoPage } from "../pages/company-info/company-info";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    LaunchDetailsPage,
    CompanyInfoPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    LaunchDetailsPage,
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
