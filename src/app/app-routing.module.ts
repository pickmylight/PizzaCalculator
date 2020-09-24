import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentwrapperComponent } from './contentwrapper/contentwrapper.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {
    path: 'home', component: ContentwrapperComponent, children:
      [
        {
          path: 'calculator', component: PizzaComponent
        },
        {
          path: 'recipes', component: RecipesComponent
        }
      ]
  },
  { path: '**', redirectTo: 'home/calculator' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
