import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ServicePhoneService} from './service-phone.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookComponent } from './Components/book/book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServicePhoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
