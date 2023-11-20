import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from 'appsettings-json-reader';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  appSettings: any = AppSettings.readAppSettings();
  constructor(private httpClient: HttpClient) { }

  getDataByRepoAndOWner(userName: string, repo: string): Observable<any> {
    return this.httpClient.get<any>(`${this.appSettings.urlBase}commits/?owner=${userName}&repo=${repo}`);
  }

}
