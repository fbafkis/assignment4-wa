import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PartiesService, Party} from "../parties.service";
import {MemberPartiesService, MemberParty} from "../member-parties.service";
import {combineLatest} from "rxjs";
import {WebsitesService, WebSite} from "../websites.service";

@Component({
  selector: 'app-parliamentarian-details',
  templateUrl: './parliamentarian-details.component.html',
  styleUrls: ['./parliamentarian-details.component.css']
})
export class ParliamentarianDetailsComponent implements OnInit {
  id: any;
  name: any;
  birthDate: any;
  picture: any;
  party: any;
  memberDate:any;
  gender: any;
  personalWebSites = new Array<WebSite>();

  parties?: Array<Party>;
  membersParties?: Array<MemberParty>;
  params?: ParamMap;
  webSites?: Array<WebSite>;
  partyId?: any;
  dataReady = false;

  constructor(private route: ActivatedRoute, private partiesService: PartiesService,
              private memberPartiesService: MemberPartiesService, private websitesService: WebsitesService) {
  }

  ngOnInit(): void {

    combineLatest(this.partiesService.parties, this.memberPartiesService.memberParties, this.route.paramMap, this.websitesService.webSites).subscribe(
      res => {
        this.parties = res[0];
        this.membersParties = res[1];
        this.params = res[2];
        this.webSites = res[3];

        this.id = this.params.get("id");
        this.name = this.params.get("name");
        this.picture = this.params.get("picture");
        if (this.params.get("birthDate") == "null")
          this.birthDate = null;
        else
          this.birthDate = this.params.get("birthDate");
        this.gender = this.params.get("gender");

        this.membersParties?.forEach((element) => {
          if (element.PersonID.toString() == this.params?.get("id")) {
            this.partyId = element.PartyID;
            this.memberDate = element.ValidFromDate.substr(0,10);
          }
        })

        if (this.partyId) {
          this.parties?.forEach((element) => {
            if (element.ID == this.partyId) {
              this.party = element.ActualName;
            }
          })
        }

        this.webSites?.forEach((element) => {
          if (element.PersonID == this.id) {
            this.personalWebSites?.push(element);
          }
        })
        this.dataReady = true;
      }
    )
  }


}
