import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ShowTodoComponent } from './components/show-todo/show-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { TodoAppComponent } from './pages/todo-app/todo-app.component';
import { Todo2Component } from './pages/todo2/todo2.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, AddTodoComponent, ShowTodoComponent, EditTodoComponent, SingleTodoComponent, TodoAppComponent, Todo2Component],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
