import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageWithParamsComponent } from './page-with-params/page-with-params.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    PageNotFoundComponent,
    PageWithParamsComponent,
    ProtectedPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
