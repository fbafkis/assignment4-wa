import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

export interface WebSite {
  ID: number;
  PersonID: string;
  WebSiteTypeID: number;
  WebURL: string;
  IsDefault: boolean;
}

@Injectable()
export class WebsitesService {

  private websitesCache$?: Observable<Array<WebSite>>

  constructor(private http: HttpClient) {
  }

  get webSites() {
    if (!this.websitesCache$) {
      this.websitesCache$ = this.requestWebsites();
    }
    return this.websitesCache$;
  }

  private requestWebsites() {
    return this.http.get<Array<WebSite>>("https://data.parliament.scot/api/websites")
      .pipe(map(response => response));
  }
}
