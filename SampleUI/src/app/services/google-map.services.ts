import { Injectable } from '@angular/core';
import { Jsonp, Headers } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class GoogleAPIService {
private googleReadyObservable;
constructor(
   private jsonp: Jsonp
) {
  this.googleReadyObservable = new Subject();
  this.jsonp
  .get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAWoCHGzZmNSFKhEbDjsughQ4x8BXmNvT4&callback=JSONP_CALLBACK`)
  .retry()
  .subscribe(res => {
    if (res.status === 200) {
      this.googleReadyObservable.complete();
    }
  });
 };

googleReady() {
return this.googleReadyObservable;
  };
}