import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FreeClassComponent } from './pages/free-class/free-class.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'reviews', component: ReviewsComponent, pathMatch: 'full' },
  { path: 'membership', component: PricingComponent, pathMatch: 'full' },
  { path: 'freeclass', component: FreeClassComponent, pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
