import { SignPost } from './../sign-post/signpost.model';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { SignPostService } from './../signpost.service';
@Injectable()
export class DataStorageService {

    url = 'http://subiquos.jelastic.cloudhosted.es/webapi/';
    constructor(private http: Http, private signPostService: SignPostService) { }

    getSignPosts() {
        return this.http.get(this.url + '/signposts?year=2017')
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

    updateDisplay(signPostId, displayId, messageId){
        return this.http.put(
            this.url + '/signposts/' + signPostId + '/display/' + displayId,
            {
                idMessage: messageId
            }
        );
    }

    storeMessage(signPostId, message) {
        return this.http.post(this.url + '/signposts/' + signPostId + '/messages', message);
    }

}
