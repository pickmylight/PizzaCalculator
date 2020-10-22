import { Component, OnInit } from '@angular/core';
import { Dough, DoughRecipe } from '../models/pizza-dough';
import { PizzacalculatorService } from '../services/pizzacalculator.service';
import { PizzaInfo } from '../models/pizza-info';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  public dough: Dough;
  public pizzaInfo: PizzaInfo;
  public doughRecipe: DoughRecipe;
  constructor(private readonly pizzaService: PizzacalculatorService) {
    this.pizzaService.currentDough.subscribe(dough => this.dough = dough);
    this.doughRecipe = 0;
  }

  ngOnInit(): void {
    this.pizzaInfo = {
      pizzaNumber: 1,
      pizzaSize: 250,
      pizzaWater: 57,
    };
    this.pizzaService.updateMeasures(this.pizzaInfo, this.doughRecipe);
  }

  public updatePizzaInfos(): void {
    console.log(this.pizzaInfo);
    this.pizzaService.updateMeasures(this.pizzaInfo, this.doughRecipe);
  }
}
