import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public recipe: string;
  public selectedRecipe: Recipe;
  public recipes: Recipe[];
  public imgSrc: string;

  constructor(
    private readonly fireStorage: AngularFireStorage,
    private readonly fireBaseService: FirebaseService
  ) {
    this.fireBaseService.currentStore.subscribe(recipes => this.recipes = recipes);
  }

  public ngOnInit(): void {
    this.recipe = 'Rezept wählen';
  }

  public async getPictureURL(recipe: Recipe): Promise<void> {
    try {
      const reference = this.fireStorage.ref(recipe.picture);
      this.imgSrc = await reference.getDownloadURL().toPromise();
    } catch (error) {
      this.imgSrc = '';
    }
  }

  public changeRecipe(recipe: string): void {
    this.recipe = recipe;
    try {
      this.selectedRecipe = this.recipes[this.recipes.findIndex(item => item.title === recipe)];
      console.log(this.selectedRecipe.picture);
      this.getPictureURL(this.selectedRecipe);
    } catch (error) {
      console.log('This recipe is not available!');
    }
  }
}
