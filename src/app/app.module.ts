import { DataStorageService } from './shared/data-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignPostService } from './signpost.service';
import { MapComponent } from './sign-post/map/map.component';
import { MessageComponent } from './sign-post/message/message.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    MessageComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      AppRoutingModule,
      ReactiveFormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCkahNVCIJ71HviK7Y-A6Xr2PIaKQGlaAU',
        libraries: ['places']
      })
  ],
  providers: [SignPostService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
