import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { CategoryScreenComponent } from './components/category-screen/category-screen.component';
import { RecipesScreenComponent } from './components/recipes-screen/recipes-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryScreenComponent,
    RecipesScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
