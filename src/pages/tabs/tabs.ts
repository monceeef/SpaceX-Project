import { Component } from "@angular/core";

import { HomePage } from "../home/home";
import { LaunchListPage } from "../launch-list/launch-list";
import { CompanyInfoPage } from "../company-info/company-info";
import { RocketsPage } from "../rockets/rockets";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = LaunchListPage;
  tab2Root = CompanyInfoPage;
  tab3Root = RocketsPage;
  tab4Root = LaunchListPage;

  constructor() {}
}
