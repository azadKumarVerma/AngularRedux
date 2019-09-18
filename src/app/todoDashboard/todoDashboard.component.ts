import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store';
import { INCREMENT } from '../actions';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './todoDashboard.component.html',
  styleUrls: ['./todoDashboard.component.css']
})
export class DashboardComponent {
  title = 'ReduxDemo';
  // @select() counter;
  counter = 0;
  courses:any;
  
  constructor(private ngRedux: NgRedux<IAppState>,
    private http: HttpClient) {
    ngRedux.subscribe(() => { // it return type > subscription so we need to unsubscribe on ngDestroy
      let store = ngRedux.getState(); // returns the current state
      this.counter = store.counter;
      this.courses = store.courses;
    }) 
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT })
  }
}


