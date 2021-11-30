import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe, Preparation } from '../models/recipe';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private readonly pizzaStore = new BehaviorSubject([] as Recipe[]);
    private readonly pinsaStore = new BehaviorSubject([] as Recipe[]);
    private readonly recipeStore = new BehaviorSubject([] as Preparation[]);
    public pinsaRecipe = this.pinsaStore.asObservable();
    public pizzaRecipe = this.pizzaStore.asObservable();
    public preparation = this.recipeStore.asObservable();
    constructor(private readonly fireStore: AngularFirestore) {
        this.fireStore.collection<Recipe>('Recipes').valueChanges().subscribe(recipes => {
            this.pizzaStore.next(recipes);
        });
        this.fireStore.collection<Recipe>('Pinsas').valueChanges().subscribe(recipes => {
            this.pinsaStore.next(recipes);
        });
    }

    loadRecipes(type: string): void {
        if ( type === 'PinsaRecipe') {
            this.fireStore.collection<Preparation>('PinsaRecipe').valueChanges().subscribe(prepsteps => {
                this.recipeStore.next(prepsteps);
            });
        } else if ( type === 'PizzaRecipe' ) {
            this.fireStore.collection<Preparation>('PizzaRecipe').valueChanges().subscribe(prepSteps => {
                this.recipeStore.next(prepSteps);
            });
        } else {
            console.log('No Recipe Steps found!');
        }
    }
}
