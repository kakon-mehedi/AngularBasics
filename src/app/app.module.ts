import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { ViewBloodRequestComponent } from './view-blood-request/view-blood-request.component';
import { ManagementComponent } from './management/management.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, AddDonorComponent, DonorListComponent, HomeComponent, NotFoundComponent, BloodRequestComponent, ViewBloodRequestComponent, ManagementComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
