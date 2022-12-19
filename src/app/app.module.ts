import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { ShowCategoryComponent } from './categories/show-category/show-category.component';
import { SingleCategoryComponent } from './categories/single-category/single-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SingleCategoryComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    EditCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
