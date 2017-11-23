import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MemoCardComponent } from './memo-card/memo-card.component';
import { MemoGridComponent } from './memo-grid/memo-grid.component';
import {
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatCheckboxModule,
  } from '@angular/material';
import { AddMemoComponent } from './add-memo/add-memo.component';



import { PinboardComponent } from './pinboard/pinboard.component';
import { MemoRoutingModule } from './memo.routing.module';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MemoRoutingModule
  ],
  declarations: [
    MemoCardComponent,
    MemoGridComponent,
    AddMemoComponent,

    PinboardComponent,


  ],
  exports: [
    PinboardComponent
  ]
})
export class MemoModule { }
