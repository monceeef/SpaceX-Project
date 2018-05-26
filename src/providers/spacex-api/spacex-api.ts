import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PENDING } from "@angular/forms/src/model";
import { Observable } from "rxjs/Observable";
import { Launch } from "../../Models/Launch";
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
}
