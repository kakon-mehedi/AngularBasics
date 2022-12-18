import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

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
