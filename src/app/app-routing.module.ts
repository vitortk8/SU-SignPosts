import { SignpostComponent } from './sign-post/signpost/signpost.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@Angular/router';

import { SignPostComponent } from './sign-post/sign-post.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    { path: 'sign-post', component: SignPostComponent},
    { path: 'signpost', component: SignpostComponent},
    { path: 'navbar', component: NavbarComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}