import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';

import { SignPost } from './sign-post/signpost.model';


@Injectable()
export class SignPostService {
    signPostChanged = new Subject<SignPost[]>();

    private signPosts: SignPost[] = [];

    constructor(private http: Http) { }

    setSignPosts(signPosts: SignPost[]){
            this.signPosts = signPosts;
            console.log(this.signPosts);
            this.signPostChanged.next(this.signPosts.slice());
    }

   

    storeSignPosts(signPosts: any[]) {
        return this.http.post('172.20.10.3:8080/signpost/webapi/profiles', signPosts);
    }

    getSignPosts() {
        return this.signPosts.slice();
    }

    storeProfile() {
        return this.http.post(
            'http://demo1653990.mockable.io/signposts',
            {
                firstName: "asdfa",
                lastName: "asdfa",
                profileName: "asdfa"
            }
        );
    }




}

