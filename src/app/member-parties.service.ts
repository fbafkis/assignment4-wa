import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


export interface MemberParty {
  ID: number;
  PersonID: number;
  PartyID: string;
  ValidFromDate: string;
  ValidUntilDate: string;
  MemberPartyRoles: string;
}

@Injectable()

export class MemberPartiesService {

  private memberPartiesCache$: Observable<Array<MemberParty>> | null | undefined;

  constructor(private http: HttpClient) {
  }

  get memberParties() {

    if (!this.memberPartiesCache$) {

      this.memberPartiesCache$ = this.requestMemberParties();

    }
    return this.memberPartiesCache$;
  }

  private requestMemberParties() {
    return this.http.get<Array<MemberParty>>("https://data.parliament.scot/api/memberparties").pipe(map(response => response));
  }
}
