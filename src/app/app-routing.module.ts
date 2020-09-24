import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentwrapperComponent } from './contentwrapper/contentwrapper.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TeiglingComponent } from './teigling/teigling.component';

const routes: Routes = [
  {
    path: 'home', component: ContentwrapperComponent, children:
      [
        {
          path: 'calculator', component: PizzaComponent
        },
        {
          path: 'recipes', component: RecipesComponent
        },
        {
          path: 'dough', component: TeiglingComponent
        }
      ]
  },
  { path: '**', redirectTo: 'home/calculator' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
