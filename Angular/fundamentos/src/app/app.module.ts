import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './manually-component/first-component.component';
import { SecondComponentComponent } from './interpolation-pipes-property&event-binding/second-component.component';
import { MultiplyByPipe } from './multiply-by.pipe';
import { CustomizedPipeComponent } from './customized-pipe/customized-pipe.component';
import { ThirdComponentComponent } from './two-way-data-binding/third-component.component';
import { FormsModule } from '@angular/forms';
import { FourthComponentComponent } from './list-rendering/fourth-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    MultiplyByPipe,
    CustomizedPipeComponent,
    ThirdComponentComponent,
    FourthComponentComponent,
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
