import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { DisplaytododsComponent } from './components/displaytodods/displaytodods.component';
import { AddtodosComponent } from './components/addtodos/addtodos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DisplaytododsComponent,
    AddtodosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
