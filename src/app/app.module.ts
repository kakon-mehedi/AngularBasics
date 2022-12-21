import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { EditDonorComponent } from './edit-donor/edit-donor.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FiterDonorsPipe } from './pipes/filter-donors.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ShowDonorComponent } from './show-donor/show-donor.component';
import { ViewBloodRequestComponent } from './view-blood-request/view-blood-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddDonorComponent,
    DonorListComponent,
    HomeComponent,
    NotFoundComponent,
    BloodRequestComponent,
    ViewBloodRequestComponent,
    ManagementComponent,
    ShowDonorComponent,
    EditDonorComponent,
    SearchPipe,
    FiterDonorsPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
