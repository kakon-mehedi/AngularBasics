import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToCartComponent } from './compoents/add-to-cart/add-to-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    ProductListComponent,
    SingleProductComponent,
    ShowCartComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
