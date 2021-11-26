import { Component, OnInit } from '@angular/core';
import {ParliamentariansService, Parliamentarian} from "../parliamentarians-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-parliamentarians-list',
  templateUrl: './parliamentarians-list.component.html',
  styleUrls: ['./parliamentarians-list.component.css']
})
export class ParliamentariansListComponent implements OnInit {
  parliamentarians$: Observable<Array<Parliamentarian>> | undefined;

  constructor(private pListService: ParliamentariansService) {
  }

  ngOnInit(): void {

    this.parliamentarians$ = this.pListService.parliamentarians;

    console.log(this.pListService.parliamentarians);

  }

}
