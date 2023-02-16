import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MembershipComponent } from './components/membership/membership.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './modules/material/material.module';
import { FreeClassComponent } from './pages/free-class/free-class.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { SafePipe } from './pipes/safe.pipe';
import { HeroVideoComponent } from './popups/hero-video/hero-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    PricingComponent,
    FreeClassComponent,
    NotFoundComponent,
    MembershipComponent,
    ReviewsComponent,
    FeaturesComponent,
    FooterComponent,
    BenefitsComponent,
    HeroVideoComponent,
    SafePipe,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
