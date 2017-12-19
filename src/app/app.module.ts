import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignPostService } from './signpost.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
      BrowserModule,
      HttpModule
  ],
  providers: [SignPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
