import { SignpostComponent } from './sign-post/signpost/signpost.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignPostComponent } from './sign-post/sign-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MesageComponent } from './sign-post/mesage/mesage.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    { path: 'signpost', component: SignpostComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'message', component: MesageComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}