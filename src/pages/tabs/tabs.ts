import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { LaunchListPage } from "../launch-list/launch-list";
import { CompanyInfoPage } from "../company-info/company-info";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = LaunchListPage;
  tab2Root = CompanyInfoPage;
  tab3Root = ContactPage;
  tab4Root = LaunchListPage;

  constructor() {}
}
