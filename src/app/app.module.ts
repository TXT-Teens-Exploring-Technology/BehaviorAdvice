import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HittingPageComponent } from './hitting-page/hitting-page.component';
import { AdvisorsPageComponent } from './advisors-page/advisors-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'advisors', component: AdvisorsPageComponent},
  { path: 'hitting', component: HittingPageComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HittingPageComponent,
    AdvisorsPageComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
