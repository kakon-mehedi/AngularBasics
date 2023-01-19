import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompAComponent } from './components/comp-a/comp-a.component';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { CompCComponent } from './components/comp-c/comp-c.component';
import { CompDComponent } from './components/comp-d/comp-d.component';

@NgModule({
  declarations: [AppComponent, CompAComponent, CompBComponent, CompCComponent, CompDComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
