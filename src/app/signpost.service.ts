import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
@Injectable()
export class SignPostService {
    constructor(private http: Http){}

    storeSignPosts(signPosts: any[]){
        return this.http.post('172.20.10.3:8080/signpost/webapi/profiles', signPosts);
    }

    getSignPosts(){
        return this.http.get('http://demo1653990.mockable.io/signposts');
    }

    storeProfile(){
            return this.http.post(
            'http://172.20.10.3:8080/signpost/webapi/profiles',
            {
                firstName:"asdfa",
                lastName:"asdfa",
                profileName:"asdfa"
            }
        );
    }
}
