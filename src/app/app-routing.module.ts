import { MessageComponent } from './sign-post/message/message.component';
import { MapComponent } from './sign-post/map/map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    { path: 'signpost', component: MapComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'message', component: MessageComponent},
    { path: 'signpost/:id/message', component: MessageComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
