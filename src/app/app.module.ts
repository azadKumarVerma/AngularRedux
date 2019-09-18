import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from 'ng2-redux'
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './todoDashboard/todoDashboard.component';
import { AdminComponent } from './todoAdmin/todoAdmin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // initialzing the store
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
