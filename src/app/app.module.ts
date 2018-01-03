import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignPostService } from './signpost.service';
import { SignPostComponent } from './sign-post/sign-post.component';
import { SignpostComponent } from './sign-post/signpost/signpost.component';
import { MesageComponent } from './sign-post/mesage/mesage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignPostComponent,
    SignpostComponent,
    MesageComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      AppRoutingModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCkahNVCIJ71HviK7Y-A6Xr2PIaKQGlaAU'
      })
  ],
  providers: [SignPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
