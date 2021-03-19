import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryScreenComponent } from '../components/category-screen/category-screen.component';
import { RecipesScreenComponent } from '../components/recipes-screen/recipes-screen.component';

const routes: Routes = [
  { path: '*', component: RecipesScreenComponent },
  { path: '', component: CategoryScreenComponent },
  { path: 'categories', component: CategoryScreenComponent },
  { path: 'recipes', component: RecipesScreenComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


