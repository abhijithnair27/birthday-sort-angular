import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { TableComponentComponent } from './table-component/table-component.component';


import { FormsModule } from '@angular/forms';
import { BirthdayService } from './birthday.service';



@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BirthdayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
