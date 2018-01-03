import { Component, OnInit } from '@angular/core';
import { SignPostService} from './signpost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    title = 'app';

    constructor (private signPostService: SignPostService){}

    getSignPosts(){
        this.signPostService.getSignPosts()
            .subscribe(
                (response) => {
                    console.log('sign posts', response.json());
                },
                (error) => console.log(error))
    }

    onPost(){
        this.signPostService.storeProfile()
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error))
    }

    ngOnInit(){
    }
}
