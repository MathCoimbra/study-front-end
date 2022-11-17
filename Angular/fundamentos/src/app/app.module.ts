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
import { PersonalizedComponentComponent } from './personalized-component/personalized-component.component';
import { SuperComponentComponent } from './super-component/super-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Service1ComponentComponent } from './service1-component/service1-component.component';
import { Service2ComponentComponent } from './service2-component/service2-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    MultiplyByPipe,
    CustomizedPipeComponent,
    ThirdComponentComponent,
    FourthComponentComponent,
    PersonalizedComponentComponent,
    SuperComponentComponent,
    ChildComponentComponent,
    Service1ComponentComponent,
    Service2ComponentComponent,
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
