import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrlListCommits = "http://localhost:3000/commits/?owner=";
  private urlForExtactaDataDynamo = "http://localhost:3000/dynamodb-data"
  constructor(private httpClient: HttpClient) { }

  getDataByRepoAndOWner(userName: string, repo: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrlListCommits}${userName}&repo=${repo}`);
  }
  getDataFromDynamo() {
    return this.httpClient.get<any>(this.urlForExtactaDataDynamo);
  }
}
