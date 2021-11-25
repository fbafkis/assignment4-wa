import { Component, OnInit } from '@angular/core';
import {PListService, Parliamentarian} from "../data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-parliamentarians-list',
  templateUrl: './parliamentarians-list.component.html',
  styleUrls: ['./parliamentarians-list.component.css']
})
export class ParliamentariansListComponent implements OnInit {
  parliamentarians$: Observable<Array<Parliamentarian>> | undefined;

  constructor(private pListService: PListService) {
  }

  ngOnInit(): void {


    this.parliamentarians$ = this.pListService.parliamentarians;

    console.log(this.pListService.parliamentarians);

    if (!this.parliamentarians$.subscribe()) {

      //this.parlamentarians$.sort((a: any, b: any) => a.ParliamentaryName.localeCompare(b.ParliamentaryName));
      hideloader();
    }


    function hideloader() {


      document.getElementById('loading')!.style.display = 'none';

    }


  }

}
