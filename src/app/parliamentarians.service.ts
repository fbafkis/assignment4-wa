import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay, map} from 'rxjs/operators';

export interface Parliamentarian {
  PersonID: number;
  PhotoURL: string;
  Notes: string;
  BirthDate: string;
  BirthDateIsProtected: boolean;
  ParliamentaryName: string;
  PreferredName: string;
  GenderTypeID: number;
  IsCurrent: boolean;
}

@Injectable()
export class ParliamentariansService {

  private pListCache$?: Observable<Array<Parliamentarian>>

  constructor(private http: HttpClient) {
  }

  get parliamentarians() {
    if (!this.pListCache$) {
      this.pListCache$ = this.requestParliamentarians()
        .pipe(shareReplay(1));
    }
    return this.pListCache$;
  }

  private requestParliamentarians() {
    return this.http.get<Array<Parliamentarian>>(
      "https://data.parliament.scot/api/members")
      .pipe(map(
        response => response.sort(
          (a: any, b: any) => a.ParliamentaryName
            .localeCompare(b.ParliamentaryName))));
  }
}


