import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReduxDemo';
  // @select() counter;
  counter = 0;
  
  constructor(private ngRedux: NgRedux<IAppState>,
    private http: HttpClient) {
  
    // navigator.geolocation.getCurrentPosition(data=>{
    //   console.log("data:: ", data);
    //   this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+data.coords.latitude+','+data.coords.longitude+'&sensor=true').
    //   subscribe(res=>{
    //     console.log("geolocation response :: ", res);
    //   })
    // })
    // first approach

    ngRedux.subscribe(() => { // it return type > subscription so we need to unsubscribe on ngDestroy
      let store = ngRedux.getState(); // returns the current state
      console.log("store", store);
      this.counter = store.counter;
    }) 
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT })
  }
}


