import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


export interface Party {
  ID: number;
  Abbreviation: string;
  ActualName: string;
  PreferredName: string;
  Notes: string;
  ValidFromDate: string;
  ValidUntilDate: string;
  MemberParties: string;
  PartyRoles: string;
}

@Injectable()
export class PartiesService {

  private partiesCache$: Observable<Array<Party>> | null | undefined;

  constructor(private http: HttpClient) {
  }

  get parties() {

    if (!this.partiesCache$) {
      this.partiesCache$= this.requestParties();
    }
    return this.partiesCache$;
  }

  private requestParties() {
    return this.http.get<Array<Party>>("https://data.parliament.scot/api/parties").pipe(map(response =>
      response.sort((a: any, b: any) => a.ActualName.localeCompare(b.ActualName))));
  }
}
