import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddNewTodoComponent } from './components/todos/add-new-todo/add-new-todo.component';
import { SingleTodoComponent } from './components/todos/single-todo/single-todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { MaterialModule } from './modules/material/material.module';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthInterceptor } from './pages/auth/auth.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { LoadingSpinerComponent } from './shared/loading-spiner/loading-spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    LoadingSpinerComponent,
    TodosComponent,
    SingleTodoComponent,
    AddNewTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
