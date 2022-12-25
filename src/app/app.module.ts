import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { KakonDashComponent } from './kakon-dash/kakon-dash.component';
import { MaterialModule } from './material/material.module';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { Dialog1Component } from './dialog/dialog1/dialog1.component';
import { CountryShowDialogComponent } from './dialog/country-show-dialog/country-show-dialog.component';
import { CountryEditDialogComponent } from './dialog/country-edit-dialog/country-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    SingleCountryComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    KakonDashComponent,
    NavigationComponent,
    MoviesComponent,
    CountryComponent,
    Dialog1Component,
    CountryShowDialogComponent,
    CountryEditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
