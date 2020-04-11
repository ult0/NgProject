import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BackendService} from "./services/backend/backend.service";

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {StepperComponent} from './components/stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StepperComponent
  ],
  imports: [
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(BackendService),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
