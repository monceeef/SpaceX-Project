import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PENDING } from "@angular/forms/src/model";
import { Observable } from "rxjs/Observable";
import { Launch, CompanyInfo,Rocket } from "../../Models/Launch";
/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {
  baseUrl = "https://api.spacexdata.com/v2";

  constructor(public http: HttpClient) {}

  getAllLaunches(): Observable<Launch[]> {
    const EndPointURL = `${this.baseUrl}/launches/all`;
    return this.http.get<Launch[]>(EndPointURL);
  }

  getCompanyInfo(): Observable<CompanyInfo> {
    const url = `${this.baseUrl}/info`
    return this.http.get<CompanyInfo>(url);
  }

  getAllRockets(): Observable<Rocket[]> {
    const EndPointURL = `${this.baseUrl}/rockets`;
    return this.http.get<Rocket[]>(EndPointURL);
  }
}
