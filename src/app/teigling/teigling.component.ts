import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preparation } from '../models/recipe';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-teigling',
  templateUrl: './teigling.component.html',
  styleUrls: ['./teigling.component.scss']
})
export class TeiglingComponent implements OnInit {
  public steps: Preparation[];
  public headerTitle: string;
  constructor(
      private readonly fireBaseService: FirebaseService,
      private readonly router: Router
    ) {
        if (this.router.url.startsWith('/pizza')) {
            this.fireBaseService.loadRecipes('PizzaRecipe');
            this.headerTitle = 'Pizza Teig';
        } else {
            this.fireBaseService.loadRecipes('PinsaRecipe');
            this.headerTitle = 'Pinsa Teig';
        }
   }

  ngOnInit(): void {
    this.fireBaseService.preparation.subscribe(prepSteps => {
        this.steps = prepSteps;
    });
}

}
