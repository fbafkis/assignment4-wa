import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PartiesService, Party } from "../parties-service.service";
import {MemberPartiesService, MemberParty} from "../member-parties-service.service";
import {Observable, combineLatest, concat} from "rxjs";

@Component({
  selector: 'app-parliamentarian-details',
  templateUrl: './parliamentarian-details.component.html',
  styleUrls: ['./parliamentarian-details.component.css']
})
export class ParliamentarianDetailsComponent implements OnInit {
  id:any;
  name:any;
  birthDate:any;
  picture:any;
  party:any;
  urls:any;
  gender:any;

  parties?:Array<Party>;
  membersParties?:Array<MemberParty>;
  params?:ParamMap;
  partyId?:any;
  dataReady=false;

  constructor(private route: ActivatedRoute, private partiesService:PartiesService,
              private memberPartiesService:MemberPartiesService) { }

  ngOnInit(): void {

  combineLatest(this.partiesService.parties,this.memberPartiesService.memberParties, this.route.paramMap).subscribe(

    res=>{this.parties=res[0]; this.membersParties= res[1]; this.params=res[2];

      this.id=this.params.get("id");
      this.name=this.params.get("name");
      this.picture=this.params.get("picture");
      if(this.params.get("birthDate")=="null")
        this.birthDate=null;
      else
        this.birthDate=this.params.get("birthDate");
      this.gender=this.params.get("gender");

      this.membersParties?.forEach((element)=>{
        if(element.PersonID.toString()==this.params?.get("id")){
          this.partyId=element.PartyID; console.log(this.partyId);
        }
      })

      if(this.partyId){

        this.parties?.forEach((element)=> {
          if(element.ID==this.partyId){
            this.party=element.ActualName;

          }
        })

      }

      console.log(this.party)

      this.dataReady=true;
    }
  )


  //  this.partiesService.parties.subscribe(parties => {


      //this.parties= parties;
    //});



    }





}
