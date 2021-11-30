import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentwrapperComponent } from './contentwrapper/contentwrapper.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TeiglingComponent } from './teigling/teigling.component';
import { WikiComponent } from './wiki/wiki.component';
import { PinsaComponent } from './pinsa/pinsa.component';

const routes: Routes = [
    {
        path: 'pizza', component: ContentwrapperComponent, children:
            [
                {
                    path: 'calculator', component: PizzaComponent
                },
                {
                    path: 'recipes', component: RecipesComponent
                },
                {
                    path: 'dough', component: TeiglingComponent
                },
                {
                    path: 'wiki', component: WikiComponent
                },
                {
                    path: '**', component: PizzaComponent
                }
            ]
    },
    {
        path: 'pinsa', component: ContentwrapperComponent, children:
            [
                {
                    path: 'calculator', component: PinsaComponent
                },
                {
                    path: 'recipes', component: RecipesComponent
                },
                {
                    path: 'dough', component: TeiglingComponent
                },
                {
                    path: '**', component: PinsaComponent
                }
            ]
    },
    { path: '**', redirectTo: 'pizza/calculator' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
