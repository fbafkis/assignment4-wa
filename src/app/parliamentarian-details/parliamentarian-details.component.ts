import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {


      this.id=params.get("id");
      this.name=params.get("name");
      this.picture=params.get("picture");
      if(params.get("birthDate")=="null")
        this.birthDate=null;
      else
        this.birthDate=params.get("birthDate");
      this.gender=params.get("gender");


    });

  }


}
