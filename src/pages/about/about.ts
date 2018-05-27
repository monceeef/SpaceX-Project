import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api"
import { CompanyInfo } from "../../Models/Launch"

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  companyInfo: CompanyInfo

  constructor(public navCtrl: NavController, private provider : SpacexApiProvider) {
  }

  ionViewDidLoad() {
    this.provider.getCompanyInfo()
    .subscribe( value => (this.companyInfo = value))
  }

}
