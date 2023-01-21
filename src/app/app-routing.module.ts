import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParkingComponent } from './components/add-parking/add-parking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParkingListComponent } from './components/parking-list/parking-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'addParking', component: AddParkingComponent },
  { path: 'parkingList', component: ParkingListComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
