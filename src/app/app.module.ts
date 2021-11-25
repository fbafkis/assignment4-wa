import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {PListService} from "./data.service";
import { ParliamentariansListComponent } from './parliamentarians-list/parliamentarians-list.component';
import { ParliamentarianDetailsComponent } from './parliamentarian-details/parliamentarian-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ParliamentariansListComponent,
    ParliamentarianDetailsComponent,
    ParliamentariansListComponent,
    ParliamentarianDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

  ],
  providers: [PListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
