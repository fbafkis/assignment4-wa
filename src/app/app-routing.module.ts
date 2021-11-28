import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParliamentariansListComponent} from "./parliamentarians-list/parliamentarians-list.component";
import {ParliamentarianDetailsComponent} from "./parliamentarian-details/parliamentarian-details.component";

const routes: Routes = [
  {path: '', component: ParliamentariansListComponent},
  {path: 'details/:id/:name/:birthDate/:picture/:gender', component: ParliamentarianDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
