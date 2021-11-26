import { Component, OnInit } from '@angular/core';
import {ParliamentariansService, Parliamentarian} from "../parliamentarians.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-parliamentarians-list',
  templateUrl: './parliamentarians-list.component.html',
  styleUrls: ['./parliamentarians-list.component.css']
})
export class ParliamentariansListComponent implements OnInit {
  parliamentarians$?: Observable<Array<Parliamentarian>>

  constructor(private pListService: ParliamentariansService) {
  }

  ngOnInit(): void {
    this.parliamentarians$ = this.pListService.parliamentarians;
  }

}
