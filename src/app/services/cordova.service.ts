import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';


@Injectable()
export class CordovaService {
  deviceReady: Observable<any>;
  ready = null;

  constructor() {
    this.deviceReady = fromEvent(document, 'deviceready');
  }

  public onReady(func) {
    this.isReady()
    .subscribe(func);
  }

  public isReady() {

    return new Observable((observer) => {

      if ((<any>window).cordova) {
        this.ready = true;
      }

      if (this.ready) {
        observer.next();
        observer.complete();
        return;
      }

      this.deviceReady.subscribe(() => {
        this.ready = true;
        observer.next();
        observer.complete();
      });
    })
  }
}
