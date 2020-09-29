import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly storeSource = new BehaviorSubject([] as Recipe[]);
  public currentStore = this.storeSource.asObservable();
  constructor(private readonly fireStore: AngularFirestore) {
    this.fireStore.collection<Recipe>('Recipes').valueChanges().subscribe(recipes => {
      this.updateRecipes(recipes);
    });
   }

   public updateRecipes(recipes: Recipe[]): void {
     this.storeSource.next(recipes);
   }


}
