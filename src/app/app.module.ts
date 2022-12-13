import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shortUI/header/header.component';
import { NavbarComponent } from './shortUI/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, HomeComponent, AboutComponent, ContactComponent, TodoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
