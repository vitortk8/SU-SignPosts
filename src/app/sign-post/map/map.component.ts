import { DataStorageService } from './../../shared/data-storage.service';
import { SignPost } from './../signpost.model';
import { SignPostService } from './../../signpost.service';
import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 41.4414846;
  longitude = -8.29393101;
  zoom = 5;
  label = 'A';
  signPosts: SignPost[];
  subscription: Subscription;
  public searchControl: FormControl;


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private signPostService: SignPostService, private dataStorageService: DataStorageService) { 

    }


  ngOnInit() {
    this.subscription = this.signPostService.signPostChanged
    .subscribe(
      (signPosts: SignPost[]) => {
        this.signPosts = signPosts;
      }
    );
    this.dataStorageService.getSignPosts();
    this.signPosts = this.signPostService.getSignPosts();
    console.log(this.signPosts);
    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }


ngOnDestroy() {
  this.subscription.unsubscribe();
}

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}



