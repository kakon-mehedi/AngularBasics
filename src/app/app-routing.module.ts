import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { EditDonorComponent } from './edit-donor/edit-donor.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowDonorComponent } from './show-donor/show-donor.component';
import { ViewBloodRequestComponent } from './view-blood-request/view-blood-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'donorList',
    component: DonorListComponent,
  },

  {
    path: 'donor/:id',
    component: ShowDonorComponent,
  },

  {
    path: 'donor/:id/edit',
    component: EditDonorComponent,
  },

  {
    path: 'addDonor',
    component: AddDonorComponent,
  },

  {
    path: 'bloodRequest',
    component: BloodRequestComponent,
  },

  {
    path: 'viewBloodRequest',
    component: ViewBloodRequestComponent,
  },

  {
    path: 'management',
    component: ManagementComponent,
  },

  { path: 'not-found', component: NotFoundComponent },

  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
