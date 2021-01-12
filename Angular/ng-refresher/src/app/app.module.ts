import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { AppRoutingModule } from './app-routing.model';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent,
  

  ],
  imports: [
    BrowserModule, FormsModule,  AppRoutingModule, HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
