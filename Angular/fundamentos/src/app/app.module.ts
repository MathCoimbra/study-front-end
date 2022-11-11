import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './manually-component/first-component';
import { SecondComponentComponent } from './interpolation-pipes-property&event-binding/second-component.component';
import { MultiplyByPipe } from './multiply-by.pipe';
import { CustomizedPipeComponent } from './customized-pipe/customized-pipe.component';
import { ThirdComponentComponent } from './two-way-data-binding/third-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    MultiplyByPipe,
    CustomizedPipeComponent,
    ThirdComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
