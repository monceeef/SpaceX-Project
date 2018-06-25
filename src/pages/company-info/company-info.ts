import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api"
import { CompanyInfo } from "../../Models/Launch"

/**
 * Generated class for the CompanyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-info',
  templateUrl: 'company-info.html',
})
export class CompanyInfoPage {

  companyInfo: CompanyInfo

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private provider : SpacexApiProvider) {
  }

  ionViewDidLoad() {
    this.provider.getCompanyInfo()
    .subscribe( value => (this.companyInfo = value))  
  
  }

}
