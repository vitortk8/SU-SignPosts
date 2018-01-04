import { SignPost } from './../sign-post/signpost.model';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { SignPostService } from './../signpost.service';
@Injectable()
export class DataStorageService {
    url = 'http://demo1653990.mockable.io/';
    constructor(private http: Http, private signPostService: SignPostService) { }

    storeSignPosts(signPosts: any[]) {
        return this.http.post('172.20.10.3:8080/signpost/webapi/profiles', signPosts);
    }

    getSignPosts() {
        return this.http.get(this.url + 'signposts')
            .map(
            (response: Response) => {
                console.log('ds-map', response.json());
                return response.json();
            })
            .subscribe(
            (signposts: SignPost[]) => {
                console.log('ds-sub', signposts);
                this.signPostService.setSignPosts(signposts);
            }
            );
    }

    storeMessage(signPostId, message) {
        return this.http.post(this.url + 'signposts/' + signPostId + '/messages', message);
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