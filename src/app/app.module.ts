import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ListComponent } from './components/list/list.component';
import { TodolistService } from './services/todolist.service';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    ListComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
