import { AppRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MemoModule} from './memo/memo.module';
import { NavigationModule } from './navigation/navigation.module';
import { MemoService } from './memo/core/memo.service';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MemoModule,
    NavigationModule,
    AppRoutingModule
  ],
  providers: [MemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
