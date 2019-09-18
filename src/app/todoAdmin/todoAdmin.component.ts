import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store';
import { INCREMENT, ADD } from '../actions';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './todoAdmin.component.html',
  styleUrls: ['./todoAdmin.component.css']
})
export class AdminComponent {
  title = 'ReduxDemo';
  // @select() counter;
  counter = 0;
  courses  = [];
  
  constructor(private ngRedux: NgRedux<IAppState>,
    private http: HttpClient) {
    ngRedux.subscribe(() => { // it return type > subscription so we need to unsubscribe on ngDestroy
      let store = ngRedux.getState(); // returns the current state
      this.courses = store.courses;
    }) 
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT })
  }

  addCourse(course){
      console.log("course :: ", course.value);
      this.ngRedux.dispatch({ type: ADD, value:course.value});
      course.value = '';
  }
}


