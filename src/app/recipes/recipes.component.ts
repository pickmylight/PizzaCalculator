import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public recipe: string;
  public chosenRecipe: Recipe;
  public recipeContent: {
    [key: string]: Recipe
  };

  constructor() { }

  public ngOnInit(): void {
    this.recipeContent = {
      Margharita: {
        ingredients: [
          'Tomatensauce', 'Mozzarella', 'Basilikum'
        ],
        conributor: 'Paul',
        picture: 'none'
      },
      Salame: {
        ingredients: [
          'Tomatensauce', 'Mozzarella', 'Basilikum', 'Salame Neapolitana'
        ],
        conributor: 'Paul',
        picture: 'none'
      },
      Prosciutto: {
        ingredients: [
          'Tomatensauce', 'Mozzarella', 'Basilikum', 'Prosciutto Cotto'
        ],
        conributor: 'Paul',
        picture: 'none'
      },
      Funghi: {
        ingredients: [
          'Tomatensauce', 'Mozzarella', 'Basilikum', '1 Großer Champignon'
        ],
        conributor: 'Paul',
        picture: 'none'
      },
      MargharitaSpecial: {
        ingredients: [
          'Tomatenmark', 'Mozzarella', 'Basilikum'
        ],
        conributor: 'Paul',
        picture: 'none'
      },
      Paolo: {
        ingredients: [
          'Mozzarella', 'Basilikum', 'Südtiroler Räucherschinken', 'getrocknete Tomaten', 'Cherrytomaten'
        ],
        conributor: 'Paul',
        picture: 'none'
      },
      Diavola: {
        ingredients: [
          'Tomatensauce', 'Mozzarella', 'Basilikum', 'Chorizo', 'Zwiebeln', 'Peperoni / Chili'
        ],
        conributor: 'Paul',
        picture: 'none'
      }
    };
  }

  public onButtonGroupClick(event: any): void {
    const clickedElement = event.target || event.srcElement;
    if (clickedElement.nodeName === 'BUTTON') {
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }
      clickedElement.className += ' active';
    }

  }

  public changeRecipe(event: any): void {
    console.log(event);
    this.recipe = event.target.name;
    try {
      this.chosenRecipe = this.recipeContent[this.recipe];
    } catch (error) {
      console.log('This recipe is not available!');
    }
  }
}
