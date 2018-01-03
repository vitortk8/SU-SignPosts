import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@Angular/router';

@Component({
  selector: 'app-signpost',
  templateUrl: './signpost.component.html',
  styleUrls: ['./signpost.component.css']
})
export class SignpostComponent implements OnInit {
  latitude  = 41.4414846;
  longitude = -8.29393101;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
