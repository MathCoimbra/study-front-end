import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplyByPipe } from './multiply-by.pipe';
import { CustomizedPipeComponent } from './customized-pipe/customized-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    MultiplyByPipe,
    CustomizedPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
