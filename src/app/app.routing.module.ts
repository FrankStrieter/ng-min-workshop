import {RouterModule, Route} from '@angular/router';
import { PinboardComponent } from './memo/pinboard/pinboard.component';
import { NgModule } from '@angular/core';


const routes: Route[] = [

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
